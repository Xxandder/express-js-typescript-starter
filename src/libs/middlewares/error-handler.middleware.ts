import { Request, Response, NextFunction } from 'express';
import { ErrorMessage, ApiError } from '../exceptions/exceptions';
import { HTTPStatusCode } from '../enums/http-status-codes.enum';

const exceptionHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if(error instanceof ApiError){
    return res
      .status(error.errorCode)
      .send(error.serializeErrors());
  }
  /// Functionality to send a message about critical error
  return res
  .status(HTTPStatusCode.InternalServerError)
  .send({message: ErrorMessage.GENERIC});
 
};

export { exceptionHandler };