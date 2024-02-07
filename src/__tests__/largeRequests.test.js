import axios from 'axios';
import { setupTestServer } from '../utils/setupTestServer.js';

describe('Axios Handling: Large Requests and Responses', () => {
  let server;

  beforeAll(() => {
    server = setupTestServer();
  });

  afterAll(() => {
    server.close();
  });

  test('should handle large request payload', async () => {
    const largePayload = new Array(100000).join('a');
    const response = await axios.post('http://localhost:3000/test', { data: largePayload });
    expect(response.data.data).toEqual(largePayload);
  });
});