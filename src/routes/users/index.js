import { Router } from 'express';

import list from './list';
import get from './get';
import create from './create';
import edit from './edit';

const router = Router();

router.route('/').get(list).post(create);
router.route('/:id').get(get).put(edit);

export default router;
