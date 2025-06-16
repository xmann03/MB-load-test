import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    stages: [
        { duration: '10s', target: 100 },
        { duration: '30s', target: 100 },
        { duration: '10s', target: 0 },
    ],
    thresholds: {
        http_req_duration: ['p(95)<2000'], 
        http_req_failed: ['rate<0.01'],  
    },
};

export default function () {
    const url = 'https://zulip.udevs.io/api/v1/messages';

    const payload = {
        content: 'Test message',
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

    sleep(1);
}
