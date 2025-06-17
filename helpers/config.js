
export const baseUrl = 'https://api.admin.u-code.io/v1/invoke_function';
export const baseUrl1 = 'https://api.admin.u-code.io/v2/';

export const headers = {
    'x-api-key': 'P-6M7o35BQg6J4clAHkaCmgkzNeIvWeDnc',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfcGxhdGZvcm1faWQiOiIiLCJjbGllbnRfdHlwZV9pZCI6IjU3ZjIzYTIxLThkNzAtNDc1YS05MmEzLWJmYzUzNGJiZTE3YyIsImRhdGEiOiJHby1odHRwLWNsaWVudC8yLjAiLCJleHAiOjE3NTAyMTYyODcsImlhdCI6MTc1MDEyOTg4NywiaWQiOiJkODBlZWNhZC1hNGFiLTQ3YTctYTNiMC04NWQwNmQ4M2YzZDgiLCJpcCI6IjEwLjExNC4wLjM3LzMyIiwibG9naW5fdGFibGVfc2x1ZyI6InVzZXJzIiwicHJvamVjdF9pZCI6IjBlYjk5NDNmLWM0MDItNGY1My1iZDZjLTZlOWJmNzc3ZmEyZSIsInJvbGVfaWQiOiJmZjk5MjgzYy0yMzliLTQ1YzEtOTIwMS02MDQwMGUyMGJmNjUiLCJ0YWJsZXMiOm51bGwsInVzZXJfaWQiOiI5Nzc4NDllOC0zYzZhLTRmYWEtYjNkMC1lOWFmOWI2NDA2OTgiLCJ1c2VyX2lkX2F1dGgiOiIyMDRlOTI0Mi0xNDFmLTRmNzYtODkzNC1mY2Y5MGEzMjIwMjQifQ.jpICY8PHECWuNiZwuatl5_2qS4byW4UTCkl20KpxMN4',
    "Content-Type": "application/json"
};

export const postHeaders = {
    'x-api-key': headers['x-api-key'],
    Authorization: headers.Authorization,
    'Content-Type': 'application/json'
};

export const testOptions = {
    // stages: [
    //     { duration: '10s', target:   50 },
    //     { duration: '10s', target:   50 },
    //     { duration: '10s', target: 0 }
    // ],
    vus: 3,
    duration: '5s',
};
