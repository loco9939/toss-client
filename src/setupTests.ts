import '@testing-library/jest-dom';
import 'whatwg-fetch';
import { server } from './mocks/node';

server.listen();

vi.mock('zustand'); // to make it work like Jest (auto-mocking)
