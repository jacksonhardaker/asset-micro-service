module.exports = {
  async rewrites() {
    return [
      {
        source: '/(p|process|s|sharp)',
        destination: '/api/process'
      }
    ];
  }
}
