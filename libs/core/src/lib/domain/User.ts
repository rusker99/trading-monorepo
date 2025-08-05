import { IBaseModel } from '../base/base.model';


export interface IUser  extends IBaseModel
{
  firstName: string,
  lastName: string,
  userName: string,
  email: string,
}
