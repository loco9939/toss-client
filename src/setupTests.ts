import '@testing-library/jest-dom';
import 'whatwg-fetch';
import { server } from './mocks/node';

beforeAll(() => server.listen());

afterAll(() => server.close());

afterEach(() => server.resetHandlers());

vi.mock('zustand'); // to make it work like Jest (auto-mocking)

vi.mock('recharts');
