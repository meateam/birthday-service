import * as mongoose from 'mongoose';
import { Server } from './server';
import config from './config';
import { SeverityLevel } from './utils/logger/severityLevel';
import { log } from './utils/logger/logger';

process.on('uncaughtException', (err: Error) => {
  console.error('Unhandled Exception', err.stack);
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection', err);
  process.exit(1);
});

(async () => {
  //   await mongoose.connect(config.db.connectionString, {
  //     useNewUrlParser: true,
  //     useFindAndModify: false,
  //   });

  //   console.log(`[MongoDB] connected to port ${config.db.port}`);
  console.log('Starting service');
  const server: Server = Server.bootstrap();
  server.listen();

  server.app.on('close', () => {
    // mongoose.disconnect();
    log(SeverityLevel.INFO, `Server closed`, 'Server');
  });
})();
