# auth-workflow
Built as part of NodeJS and Projects course 2023 - Udemy - John Smilga

React frontend provided by John Smilga. Backend is NodeJS/Express with a MongoDB Atlas database.

Authentication - JWT access tokens and refresh tokens. Allows the user to register (with confirmation email to activate account), login, logout, reset password (via email and link). Requires .env with:
* MONGO_URL = mongo connection string
* JWT_SECRET - for signing jwts
* JWT_LIFETIME
* JWT_EXPIRY
* ORIGIN = base url for frontend, eg server is on port 5000 on localhost, frontend is on port 3000.

In utils folder, requires email details for nodeMailerConfig.js and missing 'from' email in sendMail.js
