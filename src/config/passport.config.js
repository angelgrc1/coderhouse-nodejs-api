const passport = require("passport");
const GitHubStrategy = require("passport-github2");

const githubAuth = () => {
  passport.serializeUser((user, callback) => {
    callback(null, user.id);
  });

  passport.deserializeUser(async (id, callback) => {
    callback(null, id);
  });

  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/api/session/github/callback",
      },
      function (accessToken, refreshToken, profile, callback) {
        return callback(null, profile);
      }
    )
  );
};

module.exports = githubAuth;
