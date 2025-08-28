import { BaseModel } from '../base/base.model';


export interface UserModel extends BaseModel
{
  firstName: string,
  lastName: string,
  userName: string,
  email: string,
}
