import http from 'k6/http';
import { check } from 'k6';
import { postHeaders, testOptions } from './helpers/config.js';

export const options = testOptions;

export default function () {
    const url = 'https://api.admin.u-code.io/v2/invoke_function/moshina-bozor-get-single-listing?project-id=0eb9943f-c402-4f53-bd6c-6e9bf777fa2e';

    const payload = JSON.stringify({
        data: {
            listings_id: '0aacfd2c-cbc8-4912-8a59-8ab953d3a087',
            session_id: 'id-e6nne1o',
            users_id: '977849e8-3c6a-4faa-b3d0-e9af9b640698',
            is_phone_number_view: false
        }
    });

    const response = http.post(url, payload, { headers: postHeaders });

    check(response, {
        'Status is 201': (res) => res.status === 201,
    });
}
