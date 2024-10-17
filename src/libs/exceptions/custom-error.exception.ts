import { ErrorType } from "../enums/enums"
import { ValuesOf } from "../types/value-of.type"

abstract class CustomError extends Error{
    abstract errorType: ValuesOf<typeof ErrorType>

    constructor(message: string){
        super(message)

        Object.setPrototypeOf(this, CustomError.prototype)
    }

    abstract serializeErrors(): { message: string }[];
}

export { CustomError };