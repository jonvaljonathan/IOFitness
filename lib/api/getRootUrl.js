function getRootUrl() {
  const port = process.env.PORT || 3000;
  const dev = process.env.NODE_ENV !== 'production';
  const ROOT_URL = dev ? `http://localhost:${port}` : 'https://io.fitness';
  return ROOT_URL;
}

module.exports = getRootUrl;
