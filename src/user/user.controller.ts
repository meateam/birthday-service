import userServiceClient from './user.rpc';

export class UserServiceController {
  public getUserById = async (id: string) => {
    userServiceClient.GetUserByID(id, (err: any, response: { user: any }) => {
      return response;
    });
  };
}
