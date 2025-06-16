import http from 'k6/http';
import { check } from 'k6';
import { postHeaders, testOptions } from './helpers/config.js';

export const options = testOptions;

const BASE_URL = 'https://api.admin.u-code.io/v2/invoke_function/moshina-bozor-get-directories?project-id=0eb9943f-c402-4f53-bd6c-6e9bf777fa2e';

export default function () {
    const payload = JSON.stringify({
        data: {
            for_creation: true
        }
    });

    const res = http.post(BASE_URL, payload, { headers: postHeaders });

    check(res, {
        'status is 201': (r) => r.status === 201,
    });
}
