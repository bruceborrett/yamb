module.exports = {
  servers: {
    one: {
      host: 'yamb.example',
      username: 'root',
      pem: '~/.ssh/aws.pem'
    }
  },

  app: {
    name: 'yamb_staging',
    path: '../../',

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
    },

    env: {
      ROOT_URL: 'https://staging.yamb.example',
      MONGO_URL: 'mongodb://mongodb/meteor',
      MONGO_OPLOG_URL: 'mongodb://mongodb/local',
    },

    docker: {
      image: 'momenysr/meteor:root',
    },

    enableUploadProgressBar: true
  },

  mongo: {
    version: '4.4.12',
    servers: {
      one: {}
    }
  },

  proxy: {
    domains: 'staging.yamb.example',

    ssl: {
      // Enable Let's Encrypt
      letsEncryptEmail: 'info@yamb.example',
      forceSSL: true
    }
  }
};
