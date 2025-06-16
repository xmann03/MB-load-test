
export const baseUrl = 'https://api.admin.u-code.io/v1/invoke_function';
export const baseUrl1 = 'https://api.admin.u-code.io/v2/';


export const headers = {
    'x-api-key': 'P-6M7o35BQg6J4clAHkaCmgkzNeIvWeDnc',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOiIiLCJjbGllbnRfcGxhdGZvcm1faWQiOiIiLCJjbGllbnRfdHlwZV9pZCI6IjU3ZjIzYTIxLThkNzAtNDc1YS05MmEzLWJmYzUzNGJiZTE3YyIsImRhdGEiOiJHby1odHRwLWNsaWVudC8yLjAiLCJleHAiOjE3NTAxNTc3MzcsImlhdCI6MTc1MDA3MTMzNywiaWQiOiI4OTllODRkYi1jYWU0LTRhNTktOGExNS1kNWQwYzBkMGUzZWQiLCJpcCI6IjEwLjExNC4wLjM3LzMyIiwibG9naW5fdGFibGVfc2x1ZyI6InVzZXJzIiwicHJvamVjdF9pZCI6IjBlYjk5NDNmLWM0MDItNGY1My1iZDZjLTZlOWJmNzc3ZmEyZSIsInJvbGVfaWQiOiJmZjk5MjgzYy0yMzliLTQ1YzEtOTIwMS02MDQwMGUyMGJmNjUiLCJ0YWJsZXMiOltdLCJ1c2VyX2lkIjoiOTc3ODQ5ZTgtM2M2YS00ZmFhLWIzZDAtZTlhZjliNjQwNjk4IiwidXNlcl9pZF9hdXRoIjoiMjA0ZTkyNDItMTQxZi00Zjc2LTg5MzQtZmNmOTBhMzIyMDI0In0.KIpuvSx-ohNXowlKidNmCy3gGD7CpxcuKio7y6ozcSg',
    "Content-Type": "application/json"
};

export const postHeaders = {
    'x-api-key': headers['x-api-key'],
    Authorization: headers.Authorization,
    'Content-Type': 'application/json'
};

export const testOptions = {
    thresholds: {
        http_req_failed: [{ threshold: 'rate<0.01'}],
        http_req_duration: ['p(95)<3000']
    },
    stages: [
        { duration: '10s', target:   50 },
        { duration: '30s', target:   50 },
        { duration: '10s', target: 0 }
    ]
};