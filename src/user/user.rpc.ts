import config from '../config';
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = `${__dirname}/../../proto/users.proto`;

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const users_proto = protoDescriptor.users;
const userServiceClient = new users_proto.Users(config.endpoints.users.rpc, grpc.credentials.createInsecure());

export default userServiceClient;
