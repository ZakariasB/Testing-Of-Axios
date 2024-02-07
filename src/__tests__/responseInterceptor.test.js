import axios from 'axios';
import { setupTestServer } from '../utils/setupTestServer.js';

describe('Axios Response Interceptors with Test Server', () => {
  let server;

  beforeAll(() => {
    server = setupTestServer();
  });

  afterAll(() => {
    server.close();
  });

  test('should modify response through response interceptor', async () => {
    const instance = axios.create();
    instance.interceptors.response.use(response => {
      response.data = 'modified data';
      return response;
    });

    const response = await instance.get('http://localhost:3000/test-response-interceptor');
    expect(response.data).toBe('modified data');
  });
});