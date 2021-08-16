function getRootUrl() {
  const port = process.env.PORT || 3000;
  const dev = process.env.NODE_ENV !== 'production';
  const ROOT_URL = dev ? `http://localhost:${port}` : '';
  console.log('ROOT URL on getRootURL');
  console.log(process.env.NODE_ENV);
  return ROOT_URL;
}

module.exports = getRootUrl;
