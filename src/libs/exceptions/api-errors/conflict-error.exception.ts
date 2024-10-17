import { ErrorType, HTTPStatusCode } from '../../enums/enums';
import { ApiError } from '../api-error.exception';

class ConflictError extends ApiError{
    errorCode = HTTPStatusCode.Conflict;
    errorType = ErrorType.CONFLICT_ERROR

    constructor(message: string){
        super(message)

        Object.setPrototypeOf(this, ConflictError.prototype)
    }
}

export { ConflictError };