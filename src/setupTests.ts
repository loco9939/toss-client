import '@testing-library/jest-dom';
import 'whatwg-fetch';
import { server } from './mocks/node';

beforeAll(() => server.listen());

afterAll(() => server.close());

afterEach(() => server.resetHandlers());

vi.mock('zustand'); // to make it work like Jest (auto-mocking)

vi.mock('recharts');

vi.mock('@supabase/supabase-js', () => {
  return {
    createClient: vi.fn(() => {
      return {
        auth: {
          signIn: vi.fn(),
          signOut: vi.fn(),
          getSession: vi.fn().mockResolvedValue({ data: { session: '' } }),
          onAuthStateChange: vi.fn().mockReturnValue({
            data: { subscription: { unsubscribe: vi.fn() } },
          }),
          getUser: vi.fn().mockResolvedValue({ data: { user: {} } }),
        },
      };
    }),
  };
});
