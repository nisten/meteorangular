module.exports = {
  servers: {
    one: {
      host: '52.14.74.31',
      username: 'ubuntu',
      pem:"/home/derp/ohoh.pem"
      // password:
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'app',
    path: '../',
    port: 80,
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      ROOT_URL: 'http://52.14.74.31',
      MONGO_URL: 'mongodb://localhost/meteor'
    },
     
    dockerImage: "abernix/meteord:base",
    //dockerImage: 'kadirahq/meteord'
    deployCheckWaitTime: 300
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};
