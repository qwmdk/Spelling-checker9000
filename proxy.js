const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Change this to your target service
const target = 'https://api.dictionaryapi.dev'; // example for spell/dictionary check

app.use('/api', createProxyMiddleware({
  target,
  changeOrigin: true,
  pathRewrite: {
    '^/api': '' // remove /api prefix
  }
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
