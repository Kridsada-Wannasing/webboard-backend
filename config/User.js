const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const User = require("../models/User");

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_OR_KEY,
};

const JWTStrategy = new Strategy(options, async (payload, done) => {
  const user = await User.findById(payload.payload);

  if (user) done(null, user);
  else doNotTrack(null, false);
});

passport.use("jwt", JWTStrategy);
