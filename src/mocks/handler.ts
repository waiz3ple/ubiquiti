import { rest } from 'msw';

export const handlers = [
  rest.get('https://static.ui.com/fingerprint/ui/public.json', (req, res, context) => {
    //we are intercepting request and mocking the response.
    return res(
      context.status(200),
      context.json([
        {
          sysids: [],
          icon: {
            resolutions: [
              [25, 25],
              [51, 51],
              [101, 101],
              [129, 129],
              [257, 257],
            ],
            id: '0da32da2-b540-4b03-92c0-4ee5e25da040',
          },
          line: {
            name: 'airMAX',
            id: 'airmax',
          },
          guids: [],
          uisp: {
            nameLegacy: [],
            bleServices: {},
            line: 'aircube',
            firmware: {
              platform: null,
              board: [],
            },
          },
          id: 'f157e9f9-8e65-4fe8-9649-de2797402292',
          product: {
            abbrev: 'airCube',
            name: 'airCube',
          },
          shortnames: ['ACB'],
          triplets: [],
        },
        {
          sysids: ['e8f8'],
          icon: {
            resolutions: [
              [25, 25],
              [51, 51],
              [101, 101],
              [129, 129],
              [257, 257],
            ],
            id: '0d482159-5482-4cf7-b8ab-cfd1c798bab9',
          },
          line: {
            name: 'airMAX',
            id: 'airmax',
          },
          sysid: 'e8f8',
          guids: [],
          uisp: {
            nameLegacy: ['airCube'],
            bleServices: {},
            line: 'aircube',
            firmware: {
              platform: 'aircube',
              board: ['acb'],
            },
          },
          id: 'cdd9b268-13a2-404f-b295-9e8d0c605de0',
          product: {
            abbrev: 'airCube AC',
            name: 'airCube AC',
          },
          shortnames: ['ACB-AC'],
          triplets: [
            {
              k1: 'ACB-AC',
            },
            {
              k2: 'airCube AC',
              k1: 'ACB-AC',
            },
          ],
        },
        {
          sysids: ['e8f7'],
          icon: {
            resolutions: [
              [25, 25],
              [51, 51],
              [101, 101],
              [129, 129],
              [257, 257],
            ],
            id: '0b6d0790-dea7-47a0-a1a6-929b85b0f247',
          },
          line: {
            name: 'airMAX',
            id: 'airmax',
          },
          sysid: 'e8f7',
          guids: [],
          uisp: {
            nameLegacy: ['airCube'],
            bleServices: {},
            line: 'aircube',
            firmware: {
              platform: 'aircube',
              board: ['acb'],
            },
          },
          id: '3e9ea70f-416b-4c66-8740-1b6d41465b87',
          product: {
            abbrev: 'airCube ISP',
            name: 'airCube ISP',
          },
          shortnames: ['ACB-ISP'],
          triplets: [
            {
              k2: 'airCube ISP',
              k1: 'ACB-ISP',
            },
          ],
        },
      ])
    );
  }),
];
