const passport = require("passport");

const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

const User = require("../models/user");

passport.use(
  new GoogleStrategy(
    // Configuration object
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    // The verify callback function
    // Let's use async/await!
    // Fetch the user from the database and provide them back
    // to Passport by calling the cb() callback function,
    async function (accessToken, refreshToken, profile, cb) {
      // When using async/await to consume promises,
      // there is no use of .then or .catch, so we
      // use a try/catch block to handle an error
      try {
        // A user has logged in with OAuth...
        // Instead of using promise.then with a callback,
        // we can use the await keyword followed by the promise.
        // When that promise is fulfilled, it will return
        // whatever the promise's resolved value is.
        let user = await User.findOne({ googleId: profile.id });
        // Existing user found, so provide it to passport
        // error first callback signature
        // We're giving passport the user body.
        if (user) return cb(null, user);
        // We have a new user via OAuth!
        user = await User.create({
          name: profile.displayName,
          googleId: profile.id,
          email: profile.emails[0].value,
          avatar: profile.photos[0].value,
        });
        // error first callback signature
        // We're giving passport the user body.
        return cb(null, user);
      } catch (err) {
        // error first callback signature
        return cb(err);
      }
    }
  )
);

passport.serializeUser(function (user, cb) {
  cb(null, user._id);
});

passport.deserializeUser(async function (userId, cb) {
  cb(null, await User.findById(userId));
  // The above async/await code replaces this code
  // User.findById(userId).then(function(user) {
  //   cb(null, user);
  // });
});
