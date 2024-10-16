import { HttpErrorType } from "../enums/enums"
import { HTTPStatusCode } from "../enums/enums"
import { ValuesOf } from "../types/value-of.type"

abstract class CustomError extends Error{
    abstract errorCode: ValuesOf<typeof HTTPStatusCode>
    abstract errorType: ValuesOf<typeof HttpErrorType>

    constructor(message: string){
        super(message)

        Object.setPrototypeOf(this, CustomError.prototype)
    }

    abstract serializeErrors(): { message: string }[];
}

export { CustomError };