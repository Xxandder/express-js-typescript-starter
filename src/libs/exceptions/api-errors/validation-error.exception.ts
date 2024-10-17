import { ErrorType, HTTPStatusCode } from '../../enums/enums';
import { ApiError } from '../api-error.exception';

class ValidationError extends ApiError{
    errorCode = HTTPStatusCode.BadRequest;
    errorType = ErrorType.VALIDATION_ERROR

    constructor(message: string, private property: string){
        super(message)

        Object.setPrototypeOf(this, ValidationError.prototype)
    }

    serializeErrors() {
        return [{message: this.message, property: this.property}]
    }
}

export { ValidationError };