import { ResponseStatus } from './enum';

export interface ResponseServer {
  status: ResponseStatus;
  message?: string;
  data?: unknown;
}
