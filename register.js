import http from 'k6/http';
import { check } from 'k6';
import { postHeaders, testOptions } from './helpers/config.js';

export const options = testOptions;

function generateRandomPhone() {
    const prefix = '+998';
    let number = '';
    for (let i = 0; i < 9; i++) {
        number += Math.floor(Math.random() * 10);
    }
    return prefix + number;
}

export default function () {
    const baseUrl = 'https://api.admin.u-code.io/v2/invoke_function/moshina-bozor-user-authentication?project-id=0eb9943f-c402-4f53-bd6c-6e9bf777fa2e';

    const phoneNumber = generateRandomPhone();
    const source = 'web_site';

    const firstPayload = JSON.stringify({
        data: {
            phone: phoneNumber,
            source: source
        }
    });

    const res1 = http.post(baseUrl, firstPayload, { headers: postHeaders });

check(res1, {
  'sms_id exists': (r) => r.json('data.data.sms_id') !== undefined,
});



   const sms_id = res1.json('data.data.sms_id');
const user_found = res1.json('data.data.user_found');


    if (!sms_id) {
        console.error(`No sms_id returned for phone ${phoneNumber}`);
        return;
    }

    const secondPayload = JSON.stringify({
        data: {
            phone: phoneNumber,
            source: source,
            sms_id: sms_id,
            user_found: user_found,
            otp: '010101'
        }
    });

    const res2 = http.post(baseUrl, secondPayload, { headers: postHeaders });

    check(res2, {
        'Registration/login success': (r) => r.body && r.body.length > 0
    });
}
