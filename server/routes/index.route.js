import express from 'express';

import verifyUserRequest from '../middlewares/auth.middleware';

import userRoutes from './user.route';
import authRoutes from './auth.route';
import claimRoutes from './claims.route'

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) => res.send('OK'));

// mount user routes at /users
router.use('/users', userRoutes);

// mount auth routes at /auth
router.use('/auth', authRoutes);

router.use('/claims', verifyUserRequest, claimRoutes);

export default router;
