import { ErrorType } from "../enums/enums"
import { HTTPStatusCode } from "../enums/enums"
import { ValuesOf } from "../types/value-of.type"
import { CustomError } from "./custom-error.exception"

abstract class ApiError extends CustomError{
    abstract errorCode: ValuesOf<typeof HTTPStatusCode>

    constructor(message: string){
        super(message)

        Object.setPrototypeOf(this, CustomError.prototype)
    }
    serializeErrors() {
        return [{message: this.message }]
    }
}

export { ApiError };