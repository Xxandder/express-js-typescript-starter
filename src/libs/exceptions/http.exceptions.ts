import createError from 'http-errors';
import { HTTPStatusCode } from '../enums/http-status-codes.enum';
import { HTTPErrorName } from '../enums/http-error-name.enum';

export class BadRequestException {
  constructor(message = HTTPErrorName.BAD_REQUEST) {
    throw createError(HTTPStatusCode.BadRequest, message);
  }
}

export class UnauthorizedException {
  constructor(message = HTTPErrorName.UNAUTHORIZED) {
    throw createError(HTTPStatusCode.Unauthorized, message);
  }
}

export class NotFoundException {
  constructor(message = HTTPErrorName.NOT_FOUND) {
    throw createError(HTTPStatusCode.NotFound, message);
  }
}

export class ConflictException {
  constructor(message = HTTPErrorName.CONFLICT) {
    throw createError(HTTPStatusCode.Conflict, message);
  }
}

export class UnprocessableEntityException {
  constructor(message = HTTPErrorName.UNPROCESSABLE_ENTITY) {
    throw createError(HTTPStatusCode.UnprocessableEntity, message);
  }
}

export class TooManyRequestsException {
  constructor(message = HTTPErrorName.TOO_MANY_REQUESTS) {
    throw createError(HTTPStatusCode.TooManyRequests, message);
  }
}

export class InternalServerErrorException {
  constructor(message = HTTPErrorName.INTERNAL_SERVER_ERROR) {
    throw createError(HTTPStatusCode.InternalServerError, message);
  }
}

export class BadGatewayException {
  constructor(message = HTTPErrorName.BAD_GATEWAY) {
    throw createError(HTTPStatusCode.BadGateway, message);
  }
}