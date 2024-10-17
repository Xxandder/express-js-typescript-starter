import { Request, Response, NextFunction } from 'express';
import { ErrorMessage } from '../enums/error-message.enum';
import { CustomError } from '../exceptions/http.exceptions';
import { HTTPStatusCode } from '../enums/http-status-codes.enum';
import { ApiError } from '../exceptions/api-error.exception';

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