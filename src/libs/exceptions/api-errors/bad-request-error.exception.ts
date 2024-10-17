import { ErrorType, HTTPStatusCode } from '../../enums/enums';
import { ApiError } from '../api-error.exception';

class BadRequestError extends ApiError{
    errorCode = HTTPStatusCode.BadRequest;
    errorType = ErrorType.BAD_REQUEST_ERROR

    constructor(message: string){
        super(message)

        Object.setPrototypeOf(this, BadRequestError.prototype)
    }
}

export { BadRequestError };