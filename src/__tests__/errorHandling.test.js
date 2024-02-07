describe('Axios Error Handling: Invalid URLs', () => {
    test('should throw an error for invalid URL format', async () => {
      await expect(axios.get('htp://invalid-url')).rejects.toThrow('Invalid URL');
    });
  });

  describe('Axios Error Handling: Unsupported Protocols', () => {
    test('should throw an error for unsupported protocols', async () => {
      await expect(axios.get('ftp://example.com')).rejects.toThrow('Unsupported protocol');
    });
  });