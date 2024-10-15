import { Request, Response, NextFunction } from 'express';
import { ErrorMessage } from '../enums/error-message.enum';
import { IHTTPError } from '../exceptions/http-error.interface';

const exceptionHandler = (
  error: IHTTPError,
  req: Request,
  res: Response,
  _next: NextFunction
) => {

  const statusCode = error.statusCode || 500;
  const message = error.message || ErrorMessage.Generic;

  return res
    .status(statusCode)
    .send({ statusCode, message });
};

export { exceptionHandler }