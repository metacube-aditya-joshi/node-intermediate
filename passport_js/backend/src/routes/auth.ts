import express from 'express';
import passport from 'passport';
import { isAuthenticated } from '../middleware/auth';
import dotenv from "dotenv"
const router = express.Router();
dotenv.config();
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
const client=process.env.CLIENT_URL
router.get('/logout', (req, res) => {
  req.logout(()=>{
    console.log("user logged out");
  });
  res.redirect(client||"");
});

export default router;