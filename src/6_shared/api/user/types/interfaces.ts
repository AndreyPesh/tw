export interface ResponseSuccess {
  status: number;
  data: unknown;
}

export interface ResponseError {
  status: number;
  message: string;
}
