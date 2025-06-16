
import http from 'k6/http';
import { check, sleep } from 'k6';
import { postHeaders, testOptions } from './helpers/config.js';

export const options = testOptions;


export default function () {
  const url = 'https://api.admin.u-code.io/v2/items/listings?project-id=0eb9943f-c402-4f53-bd6c-6e9bf777fa2e';

  const payload = JSON.stringify({
    data: {
      address: "Узбекистан, Ферганская область, городской посёлок Алтыарык",
      attribute_groups: [
        {
          attributes: [
            {
              data_type: ["price"],
              display_order: 2,
              guid: "a3274abf-d030-43f0-859a-6d9246406f69",
              name_en: null,
              name_ru: "Цена",
              name_uz: "Narxi",
              slug: "price",
              value: null
            },
            {
              data_type: ["year"],
              display_order: 1,
              guid: "85459696-61d0-4971-859f-ca9ee56c8ff8",
              name_en: null,
              name_ru: "Год выпуска",
              name_uz: "Chiqarilgan yili",
              slug: "year",
              value: null
            },
            {
              data_type: ["number"],
              display_order: 4,
              guid: "9238ffca-187b-4feb-a28d-e119499e2fca",
              name_en: null,
              name_ru: "Объем дивигателя, в литрах",
              name_uz: "Dvigatel hajmi, litrda",
              slug: "engine_size",
              value: null
            },
            {
              data_type: ["km"],
              display_order: 3,
              guid: "039f9c86-7740-4eac-8c76-89e6b9e65a18",
              name_en: null,
              name_ru: "Пробег, в км",
              name_uz: "Yurgan masofasi, km",
              slug: "mileage",
              value: null
            },
            {
              data_type: ["select"],
              display_order: 5,
              guid: "695c64fa-1e9d-4fc7-9b79-133066b34a0a",
              name_en: null,
              name_ru: "Состаяния краски",
              name_uz: "Kraska holati",
              slug: "paint_condition",
              value: [
                { value: "new", label_ru: "Родная краска", label_uz: "Kraska toza" },
                { value: "have", label_ru: "Крашеная", label_uz: "Kraska bor" },
                { value: "spot", label_ru: "Есть пятно", label_uz: "Pyatno bor" },
                { value: "fully", label_ru: "Полный окрас", label_uz: "To'liq kraskalangan" }
              ]
            }
          ],
          name_en: null,
          name_ru: "Общая информация об автомобиле",
          name_uz: "Umumiy ma'lumotlar avtomabil",
          slug: "general_info"
        }
      ],
      attributes_ids: [
        "d0995b4c-95e3-43c1-9acd-0b44352f5127",
        "c0191ca9-9d71-4453-adec-181a91ac2917",
        "0cbdbb14-d6c2-43a3-a474-73648413598d",
        "f94cee80-ab70-47df-8e96-1ec3c80b9be0"
      ],
      body_types_id: "57ee158b-c711-44f1-8385-09017333db4a",
      body_types_id_data: {
        guid: "57ee158b-c711-44f1-8385-09017333db4a",
        name_en: "Hatchback",
        name_ru: "Хэтчбек",
        name_uz: "Hatchback",
        slug: "hatchback"
      },
      brands_id: "f70f454b-45b8-4ecb-acb0-7752d328b351",
      brands_id_data: {
        guid: "f70f454b-45b8-4ecb-acb0-7752d328b351",
        logo: null,
        name: "BMW",
        slug: "bmw"
      },
      categories_id: "7c4bd3a0-80d2-4e2c-aeaa-399cf5a5381b",
      categories_id_data: {
        guid: "7c4bd3a0-80d2-4e2c-aeaa-399cf5a5381b",
        name_en: "Passenger",
        name_ru: "Легковые",
        name_uz: "Yengil avtomobillar",
        slug: "passenger"
      },
      cities_id: "1841a873-d8f6-48e2-a52b-37fed2633bf5",
      colors_id: "6b2c3136-a64f-42fc-89a8-52f5355ff9c5",
      colors_id_data: {
        guid: "6b2c3136-a64f-42fc-89a8-52f5355ff9c5",
        hex_code: "#000000",
        name_en: "Black",
        name_ru: "Черный",
        name_uz: "Qora"
      },
      created_time: "2025-06-16T08:27:55.209389Z",
      currencies_id: "99a8ec2e-3575-48c4-9727-25d9d7b24147",
      currencies_id_data: {
        code: "USD",
        guid: "99a8ec2e-3575-48c4-9727-25d9d7b24147",
        name: "Dollar"
      },
      description: "jjsdj",
      drive_types_id: "0a49f97f-9713-4edd-bff1-0024208b1cc1",
      drive_types_id_data: {
        guid: "0a49f97f-9713-4edd-bff1-0024208b1cc1",
        name_en: "Rear",
        name_ru: "Задний",
        name_uz: "Orqa",
        slug: "rear"
      },
      engine_size: 10,
      engine_types_id: "84ff3518-ad91-4ad2-b51d-4f336bd25240",
      engine_types_id_data: {
        guid: "84ff3518-ad91-4ad2-b51d-4f336bd25240",
        name_ru: "Электричество",
        name_uz: "Elektr",
        slug: "ekektr"
      },
      guid: "e80d759e-ed9b-40c4-af7b-41d078eb8186",
      location: "71.47521,40.391494",
      media: [
        {
          url: "https://cdn.u-code.io/4865fff7-b0fc-46ef-b6ff-cb87648173ee/Media/87d941fc-fd08-44bb-8fc4-3ba4f0667e9b_images(1).jpeg"
        }
      ],
      mileage: 4665000,
      models_id: "41e16e1a-8c00-4440-a689-e6a67531d10f",
      models_id_data: {
        guid: "41e16e1a-8c00-4440-a689-e6a67531d10f",
        name: "3 Series",
        slug: "3-series"
      },
      paint_condition: ["spot"],
      price: 10000,
      regions_id: "c8af1b1f-244d-4a97-a821-239a4532fa9a",
      services_id: "12a515de-5b7a-447a-9a4d-e1c26343cf69",
      services_id_data: {
        guid: "12a515de-5b7a-447a-9a4d-e1c26343cf69",
        name_en: "Avtomobilar",
        name_ru: "Машины",
        name_uz: "Mashinalar",
        slug: "avto"
      },
      statuses_id: "ca4f1674-1fe6-4a20-b7fc-66fb347f1622",
      statuses_id_data: {
        guid: "6e1412d6-8aa7-45b7-99ee-f20c5a0050d8",
        name_en: "Draft",
        name_ru: "Черновик",
        name_uz: "Chernovik",
        slug: "draft"
      },
      tags_ids: ["7e5a38af-c80d-4b50-b7c5-9b5285666d44"],
      tags_ids_data: [
        {
          guid: "7e5a38af-c80d-4b50-b7c5-9b5285666d44",
          hex_code: "#22ad5c",
          name_en: "Yes negotiation",
          name_ru: "Торг есть",
          name_uz: "Kami bor",
          slug: "bargain"
        }
      ],
      tariffs_id: "7e27a8de-dd1f-4354-bdd0-0f11ed7006db",
      title: "BMW 3 Series",
      transmission_types_id: "72d30084-9737-4807-add7-30cfd9af5b8c",
      transmission_types_id_data: {
        guid: "72d30084-9737-4807-add7-30cfd9af5b8c",
        name_en: "Mechanical",
        name_ru: "Механика",
        name_uz: "Mexanika",
        slug: "mechanical"
      },
      users_id: "977849e8-3c6a-4faa-b3d0-e9af9b640698",
      users_id_data: {
        chat_email: "2076d5214e@mbozor.uz",
        chat_id: 534,
        chat_key: "JLCuQPdoqjVNeuXVB0hyu6GhA4Eucdip",
        first_name: null,
        guid: "977849e8-3c6a-4faa-b3d0-e9af9b640698",
        is_verified: null,
        last_name: null
      },
      year: 2006,
      general_info: [
        "a3274abf-d030-43f0-859a-6d9246406f69",
        "85459696-61d0-4971-859f-ca9ee56c8ff8",
        "9238ffca-187b-4feb-a28d-e119499e2fca",
        "039f9c86-7740-4eac-8c76-89e6b9e65a18",
        "695c64fa-1e9d-4fc7-9b79-133066b34a0a"
      ],
      salon: [
        "d0995b4c-95e3-43c1-9acd-0b44352f5127",
        "c0191ca9-9d71-4453-adec-181a91ac2917"
      ],
      snajurki: ["0cbdbb14-d6c2-43a3-a474-73648413598d"],
      optika: ["f94cee80-ab70-47df-8e96-1ec3c80b9be0"],
      is_agree: true
    }
  });

const res = http.put(url, payload, { headers: postHeaders });

  check(res, {
    'PUT status is 200': (r) => r.status === 200,
  });

  sleep(1);
}
