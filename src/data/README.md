# API

This folder is intended to contain stand-alone API modules for different groups of queries.

## axiosWithConfig.tsx

This file contains two methods which are configured to connect to the Node API (these should only be used by files in this API folder):

- `axiosWithAuth()`: this method reads in the auth token from localStorage and passes it in the Authorization header of your request.
- `axiosWithoutAuth()`: this method sends a standard request with no authorization to the backend. This is only useful for unprotected requests (login, signup, vote w/o account).

> If you want to connect to the deployed API, you must set `NODE_API_URL` in your `.ENV` . If the proper variable isn't set, axios will use `http://localhost:5000` as the `baseUrl` for config.
