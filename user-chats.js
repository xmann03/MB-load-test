import http from "k6/http";
import { check, sleep } from "k6";
import { baseUrl1, postHeaders, testOptions } from './helpers/config.js';

export let options = testOptions;

export default function () {
    const url = `${baseUrl1}invoke_function/moshina-bozor-user-authentication/v1/chat/user-chats?project-id=0eb9943f-c402-4f53-bd6c-6e9bf777fa2e`;

    const payload = JSON.stringify({
        data: {
            email: "2076d5214e@mbozor.uz",
            api_key: "JLCuQPdoqjVNeuXVB0hyu6GhA4Eucdip",
            search: "",
            users_id: "977849e8-3c6a-4faa-b3d0-e9af9b640698"
        }
    });

    const res = http.post(url, payload, {
        headers: postHeaders
    });

    check(res, {
        "status is 200": (r) => r.status === 200,
    });

    //sleep(1);
}
