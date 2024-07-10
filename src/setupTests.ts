import '@testing-library/jest-dom';
import 'whatwg-fetch';
import { server } from './mocks/node';

beforeAll(() => server.listen());

afterAll(() => server.close());

afterEach(() => server.resetHandlers());

vi.mock('zustand'); // to make it work like Jest (auto-mocking)

vi.mock('recharts');

// NOTE: actual 안쓰면 supabase 읽어오질 못하고, actual 쓰고 env 대신 직접 사용하면 실제 데이터를 요청하고...
// vi.mock('@supabase/supabase-js', async importOriginal => {
//   const actual = await importOriginal();
//   return {
//     ...actual,
//     // your mocked methods
//     // () => ({
//     //   createClient: vi.fn(() => ({
//     //     from: vi.fn(() => ({
//     //       select: vi.fn(() => ({
//     //         returns: vi.fn(() => ({
//     //           data: [],
//     //           error: null,
//     //         })),
//     //       })),
//     //     })),
//     //   })),
//     // }),
//   };
// });
