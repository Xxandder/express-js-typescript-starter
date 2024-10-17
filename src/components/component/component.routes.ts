import { NextFunction, type Request, 
    type Response,
    Router 
} from 'express';
import { BadRequestError } from '../../libs/exceptions/exceptions';

const router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    next(new BadRequestError('Field is wrong'))
});

export {
    router as componentRouter
}