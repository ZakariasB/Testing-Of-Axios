import express from 'express';

export function setupTestServer() {
    const app = express();
    app.use(express.json({ limit: '50mb' }));
  
    app.post('/test', (req, res) => {
      res.json(req.body);
    });

    app.get('/test-response-interceptor', (req, res) => {
      res.json({ data: 'original data' });
    });  
  
    let server = app.listen(3000, () => console.log(`Test server running on port 3000`));
  
    return {
      close: () => server.close(),
    };
  }