import { Request, Response, NextFunction } from 'express';
import { ErrorMessage } from '../enums/error-message.enum';
import { CustomError } from '../exceptions/http.exceptions';
import { HTTPStatusCode } from '../enums/http-status-codes.enum';

const exceptionHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {

  if(error instanceof CustomError){
    return res
      .status(error.errorCode)
      .send(error.serializeErrors());
  }
  return res
  .status(HTTPStatusCode.InternalServerError)
  .send({message: ErrorMessage.Generic});
 
};

export { exceptionHandler };