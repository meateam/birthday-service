import userServiceClient from './person.grpc.client';

export class PersonManager {
  static getPersonById = async (id: string) => {
    return new Promise((resolve, reject) => {
      userServiceClient.GetUserByID({ id }, (err: Error, response: any) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(response.user);
      });
    });
  };
}
