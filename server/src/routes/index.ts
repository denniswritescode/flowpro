import { Router } from 'express';
import TransactionsRouter from './Transactions';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/transactions', TransactionsRouter);

// Export the base-router
export default router;
