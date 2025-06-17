import http from "k6/http";
import { check } from "k6";
import { baseUrl1, postHeaders, testOptions } from './helpers/config.js';

export let options = testOptions;

export default function () {
    const payload = JSON.stringify({
        data: {
            statuses_id: "ca4f1674-1fe6-4a20-b7fc-66fb347f1622",
            users_id: "977849e8-3c6a-4faa-b3d0-e9af9b640698",
            limit: 20,
            page: 1
        }
    });

    const url = `${baseUrl1}invoke_function/moshina-bozorim-get-list-gateway/v1/listings/get-my-listings?project-id=0eb9943f-c402-4f53-bd6c-6e9bf777fa2e`;

    const res = http.post(url, payload, { headers: postHeaders });

    check(res, {
        "status is 200": (r) => r.status === 200,
    });
}
