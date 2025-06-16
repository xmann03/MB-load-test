import http from 'k6/http';
import { check } from 'k6';
import { postHeaders, testOptions } from './helpers/config.js';

export const options = testOptions;

export default function () {
    const url = 'https://api.admin.u-code.io/v2/items/listings?project-id=0eb9943f-c402-4f53-bd6c-6e9bf777fa2e';

    const payload = JSON.stringify({
        data: {
            currencies_id: "99a8ec2e-3575-48c4-9727-25d9d7b24147",
            brands_id: "3139a1a2-50ff-48fe-8836-2e365c5d2919",
            year: 1999,
            price: 7700,
            mileage: 97000,
            engine_size: 5,
            body_types_id: "57ee158b-c711-44f1-8385-09017333db4a",
            drive_types_id: "dec2d5fc-2a6b-457b-a087-51cadfe8fca8",
            engine_types_id: "84ff3518-ad91-4ad2-b51d-4f336bd25240",
            transmission_types_id: "72d30084-9737-4807-add7-30cfd9af5b8c",
            colors_id: "3d0e2f33-87a1-4d2c-b518-d084a460ec60",
            paint_condition: ["have"],
            rent_options: [
                {
                    prepayment: "5000",
                    rental_period: "60",
                    payment_per_month: "10"
                }
            ],
            models_id: "8f11098c-d13f-41e6-abf8-5863bf167fc6",
            tags_ids: ["94d9b1be-ca3d-4965-be6c-08df87c04cea"],
            attributes_ids: [],
            title: "Aiways U6",
            services_id: "12a515de-5b7a-447a-9a4d-e1c26343cf69",
            categories_id: "7c4bd3a0-80d2-4e2c-aeaa-399cf5a5381b",
            statuses_id: "6e1412d6-8aa7-45b7-99ee-f20c5a0050d8",
            users_id: "977849e8-3c6a-4faa-b3d0-e9af9b640698"
        }
    });

    const res = http.post(url, payload, { headers: postHeaders });

    check(res, {
        'status is 201': (r) => r.status === 201,
    });
}
