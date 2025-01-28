import express from 'express';
import passport from 'passport';
import { isAuthenticated } from '../middleware/auth';

const router = express.Router();

// Google Auth Routes
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

// Facebook Auth Routes
router.get(
  '/facebook',
  passport.authenticate('facebook', { scope: ['email'] })
);

router.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: `${process.env.CLIENT_URL}/login`,
  })
);

// Twitter Auth Routes
router.get('/twitter', passport.authenticate('twitter'));

router.get(
  '/twitter/callback',
  passport.authenticate('twitter', {
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