// Step 1. We begin with creating a Configuration, which contains the username and password for authentication.
const vrchat = require("vrchat");
const configuration = new vrchat.Configuration({
  username: "username",
  password: "password",
});

// Step 2. VRChat consists of several API's (WorldsApi, UsersApi, FilesApi, NotificationsApi, FriendsApi, etc...)
// Here we instantiate the Authentication API which is required for logging in.
const AuthenticationApi = new vrchat.AuthenticationApi(configuration);

// Step 3. Calling getCurrentUser on Authentication API logs you in if the user isn't already logged in.
AuthenticationApi.getCurrentUser().then((resp) => {
  const currentUser = resp.data;
  console.log(`Logged in as: ${currentUser.displayName}`);
});
