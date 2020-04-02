const config = {
  server: {
    port: process.env.PORT || 3333,
    name: 'Birthday-Service',
  },
  db: {
    connectionString: `${process.env.DB_SERVER || 'mongodb://localhost:27017/'}${
      process.env.DB_NAME || 'birthdayDB'
    }${process.env.DB_REPLICA_NAME ? `?replicaSet=${process.env.DB_REPLICA_NAME}` : ''}`,
    port: process.env.DB_PORT || 27017,
  },
  env: {
    prod: 'production',
    dev: 'development',
  },
};

export default config;
