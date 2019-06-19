module.exports = {
  client: {
    service: {
      name: 'graphql-product',
      url: 'http://localhost:8080/graphql',
      headers: { 
        "Grass-Account-Type": "vendor",
        "Grass-Account-Id": 15554 
      },
    },
  },
};
