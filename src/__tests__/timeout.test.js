import axios from 'axios';

describe('Axios Timeout Logic', () => {
  test('should timeout a request', async () => {
    const instance = axios.create({ timeout: 1 });

    instance.get = jest.fn().mockImplementation(() =>
      new Promise((resolve) => setTimeout(() => resolve('response'), 10))
    );

    await expect(instance.get('http://example.com')).rejects.toThrow('timeout of 1ms exceeded');
  });
});