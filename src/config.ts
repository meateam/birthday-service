const config = {
  server: {
    port: process.env.PORT || 3333,
    name: 'Birthday-Service',
  },
  db: {
    connectionString: `mongodb://${process.env.DB_SERVER || 'localhost:27017'}/${
      process.env.DB_NAME || ''
    }${process.env.DB_REPLICA_NAME ? `?replicaSet=${process.env.DB_REPLICA_NAME}` : ''}`,
    port: process.env.DB_PORT || 27017,
  },
};

export default config;
