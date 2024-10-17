import { ErrorType, HTTPStatusCode } from '../../enums/enums';
import { ApiError } from '../api-error.exception';

class UnprocessableEntityError extends ApiError{
    errorCode = HTTPStatusCode.UnprocessableEntity;
    errorType = ErrorType.UNPROCESSABLE_ENTITY_ERROR

    constructor(message: string){
        super(message)

        Object.setPrototypeOf(this, UnprocessableEntityError.prototype)
    }
}

export { UnprocessableEntityError };