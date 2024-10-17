import { ErrorMessage, ErrorType } from "../enums/enums";
import { HTTPStatusCode } from "../enums/enums";
import { ValuesOf } from "../types/value-of.type";
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
