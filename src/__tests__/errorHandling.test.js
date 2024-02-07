import axios from 'axios'

describe('Axios Error Handling: Invalid URLs', () => {
    test('should throw an error for invalid URL format', async () => {
      await expect(axios.get('http://invalid-url')).rejects.toThrow('getaddrinfo ENOTFOUND invalid-url');
    });
  });

  describe('Axios Error Handling: Unsupported Protocols', () => {
    test('should throw an error for unsupported protocols', async () => {
      await expect(axios.get('ftp://example.com')).rejects.toThrow('Unsupported protocol');
    });
  });