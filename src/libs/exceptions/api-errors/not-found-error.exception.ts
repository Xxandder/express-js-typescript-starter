import { ErrorType, HTTPStatusCode } from '../../enums/enums';
import { ApiError } from '../api-error.exception';

class NotFoundError extends ApiError{
    errorCode = HTTPStatusCode.NotFound;
    errorType = ErrorType.NOT_FOUND_ERROR

    constructor(message: string){
        super(message)

        Object.setPrototypeOf(this, NotFoundError.prototype)
    }
}

export { NotFoundError };