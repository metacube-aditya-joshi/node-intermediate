import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import { Strategy as TwitterStrategy } from 'passport-twitter';
import User from '../models/User';

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

// Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: '/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ socialId: profile.id });
        
        if (!user) {
          user = await User.create({
            email: profile.emails![0].value,
            name: profile.displayName,
            profilePicture: profile.photos![0].value,
            socialProvider: 'google',
            socialId: profile.id,
          });
        }
        
        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);

// Facebook Strategy
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID!,
      clientSecret: process.env.FACEBOOK_APP_SECRET!,
      callbackURL: '/auth/facebook/callback',
      profileFields: ['id', 'displayName', 'photos', 'email'],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ socialId: profile.id });
        
        if (!user) {
          user = await User.create({
            email: profile.emails![0].value,
            name: profile.displayName,
            profilePicture: profile.photos![0].value,
            socialProvider: 'facebook',
            socialId: profile.id,
          });
        }
        
        done(null, user);
      } catch (error) {
        done(error, null);
      }
    }
  )
);

// Twitter Strategy
passport.use(
  new TwitterStrategy(
    {
      consumerKey: process.env.TWITTER_API_KEY!,
      consumerSecret: process.env.TWITTER_API_SECRET!,
      callbackURL: '/auth/twitter/callback',
      includeEmail: true,
    },
    async (token, tokenSecret, profile, done) => {
      try {
        let user = await User.findOne({ socialId: profile.id });
        
        if (!user) {
          user = await User.create({
            email: profile.emails![0].value,
            name: profile.displayName,
            profilePicture: profile.photos![0].value,
            socialProvider: 'twitter',
            socialId: profile.id,
          });
        }
        
        done(null, user);
      } catch (error) {
        done(error, null);
      }
    }
  )
);