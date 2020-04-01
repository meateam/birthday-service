import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import config from './config';
import { SeverityLevel } from './utils/logger/severityLevel';
import { log } from './utils/logger/logger';

export class Server {
  public app: express.Application;

  private constructor() {
    this.app = express();

    this.initializeMiddlewares();
    // this.initializeControllers();
    // this.initializeErrorHandling();
  }

  public static bootstrap(): Server {
    return new Server();
  }

  public listen() {
    this.app.listen(config.server.port, () => {
      log(
        SeverityLevel.INFO,
        `Server running in ${process.env.NODE_ENV || 'development'} environment on port
        ${config.server.port}`,
        'connectedToServer',
      );
    });
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(cookieParser());
  }

  private initializeControllers() {
    throw new Error('Method not implemented.');
  }

  private initializeErrorHandling() {
    throw new Error('Method not implemented.');
  }
}
