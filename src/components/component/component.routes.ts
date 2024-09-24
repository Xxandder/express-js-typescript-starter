import { type Request, 
    type Response,
    Router 
} from 'express';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    res.send('Hello Express!');
});

export {
    router as componentRouter
}