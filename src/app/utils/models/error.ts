import { ResponseModel } from './response';
export interface ErrorModel {
  error: ResponseModel;
  headers: object;
  status: string;
  message: string;
}

