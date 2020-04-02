import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as morgan from 'morgan';
import config from './config';
import { log } from './utils/logger/logger';
import { SeverityLevel } from './utils/logger/severityLevel';
import addHeaders from './middlewares/addHeaders.middleware';
import * as errorhandlers from './utils/erros/errorHandlers';

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
        `Server running in ${process.env.NODE_ENV || config.env.dev} environment on port ${config.server.port}`,
        'connectedToServer',
      );
    });
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(cookieParser());
    this.app.use(addHeaders);

    if (process.env.NODE_ENV === config.env.dev) {
      this.app.use(morgan('dev'));
    }
  }

  private initializeControllers() {
    throw new Error('Method not implemented.');
  }

  private initializeErrorHandling() {
    this.app.use(errorhandlers.serverErrorHandler);
    this.app.use(errorhandlers.unknownErrorHandler);
    this.app.use(errorhandlers.userErrorHandler);
  }
}
