# Auth

The `Auth` API module should contain all requests related to authorization/authentication, as well as any requests related to user info.

## `login`

This function logs the user in.

## `signup`

This sends a signup request to the API.

## `formatSignupBody`

This is used to translate the contents of the signup form into the proper values that the API is expecting for the request.

## `getResetEmail`

This function triggers the API to send a password reset email for the email address passed in as a parameter.

## `updatePassword`

Sends the actual request that changes the user's password to the new password being passed in the body.
