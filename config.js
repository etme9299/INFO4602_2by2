const config = {
  theme: {
    bg_color: '#eeeeee',
    accent_color: '#008080',
  },
};


if (process.env.PORT) {
  //Production
  config.serverInfo = {
    dbConnectionString: `mongodb+srv://2by2admin:apLNzYGNfXlphhyc@2by2-cluster.1f0jn.mongodb.net/2by2_db`,
    hostName: 'www.2by2.us',
  };
} else {
  //Development
  config.serverInfo = {
    dbConnectionString: `mongodb://root:rootpassword@2by2_mongo:27017/2by2_db`,
    hostName: 'localhost:8080',
  };
}



module.exports = config;