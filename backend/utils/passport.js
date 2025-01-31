import express from 'express';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import { OAuth2Client } from 'google-auth-library'

passport.use(
  new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET_KEY,
    callbackURL: "/api/auth/google/callback"
  },
    async (accessToken, refreshToken, profile, done) => {
      try {
        done(null, profile);
      } catch (err) {
        done(err, false);
      }
    })
)