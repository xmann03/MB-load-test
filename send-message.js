import http from 'k6/http';
import { check } from 'k6';

export const options = {
    // stages: [
    //     { duration: '10s', target: 100 },
    //     { duration: '30s', target: 100 },
    //     { duration: '10s', target: 0 },
    // ],
    vus: 10,
    duration: '10s',
};

export default function () {
    const url = 'https://zulip.udevs.io/api/v1/messages';

    const payload = {
        content: 'Testing',
        type: 'direct',
        to: '998940000000@mbozor.uz',
        chatUserName: '2076d5214e@mbozor.uz',
        chatApiKey: 'JLCuQPdoqjVNeuXVB0hyu6GhA4Eucdip',
    };

    const encodedParams = Object.entries(payload)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic MjA3NmQ1MjE0ZUBtYm96b3IudXo6SkxDdVFQZG9xalZOZXVYVkIwaHl1NkdoQTRFdWNkaXA=',
    };

    const res = http.post(url, encodedParams, { headers });

    check(res, {
        'status is 200': (r) => r.status === 200,
    });
}
