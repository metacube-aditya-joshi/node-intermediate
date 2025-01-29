import express from 'express';
import passport from 'passport';
import { isAuthenticated } from '../middleware/auth';

const router = express.Router();

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: `${process.env.CLIENT_URL}/login`,
  })
);


// Get User Profile
router.get('/user', isAuthenticated, (req, res) => {
  res.json(req.user);
});

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect(process.env.CLIENT_URL);
});

export default router;