import { ErrorMessage, ErrorType } from "../enums/enums";
import { CustomError } from "./custom-error.exception";

class DatabaseConnectionError extends CustomError {
    errorType = ErrorType.DATABASE_ERROR;

    constructor() {
        super(ErrorMessage.DATABASE_CONNECTION_ERROR);
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    serializeErrors() {
        return [{ message: this.message }];
    }
}

export { DatabaseConnectionError };
