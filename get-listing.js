import http from 'k6/http';
import { check } from 'k6';
import { postHeaders, testOptions } from './helpers/config.js';

export const options = testOptions;

export default function () {
    const url = 'https://api.admin.u-code.io/v2/invoke_function/moshina-bozor-get-listings?project-id=0eb9943f-c402-4f53-bd6c-6e9bf777fa2e';

    const payload = JSON.stringify({
        data: {
            categories_id: '7c4bd3a0-80d2-4e2c-aeaa-399cf5a5381b',
            services_id: '12a515de-5b7a-447a-9a4d-e1c26343cf69',
            currency: 'UZS',
            brands_id: '9148e6d4-f3fa-4f7e-a085-d1351f3ea3b5',
            models_id: '1267d91c-adf5-487a-bb80-68b099d29fcd',
            show_popular: true,
            own_user_id: '977849e8-3c6a-4faa-b3d0-e9af9b640698',
            session_id: 'id-e6nne1o',
            limit: 20,
            page: 1
        }
    });

    const res = http.post(url, payload, { headers: postHeaders });

    check(res, {
        'status is 201': (r) => r.status === 201,
    });
}
