import { ErrorType, HTTPStatusCode } from '../../enums/enums';
import { ApiError } from '../api-error.exception';

class UnauthorizedError extends ApiError{
    errorCode = HTTPStatusCode.Unauthorized;
    errorType = ErrorType.UNAUTHORIZED_ERROR

    constructor(message: string){
        super(message)

        Object.setPrototypeOf(this, UnauthorizedError.prototype)
    }
}

export { UnauthorizedError };