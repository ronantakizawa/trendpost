import express from 'express';
import { getHomePage,generatePhoto} from './igtrendgenerator.js';

const router = express.Router();


router.get('/', getHomePage);

router.post('/', generatePhoto);

export default router;