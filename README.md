# Groupomania React App


## Setup the Environment
1. After cloning the repository you will see two environment files (`.env-sample`) -- one is located in `app/` and the other in `app/src/backend`. Rename them both to `.env`.
2. You don't need to do anything to the one in `app/` but change the `CHANGE_ME` in `app/src/backend` to your mysql user name and password.
3. Use the `app/src/backend/schema.sql` to create the tables in MySQL.
4. Create an `images/` folder in `app/src/backend`. 

## Running the App

1. Make sure you have node installed on your device
2. Navigate to `app/src/frontend` and run `npm start`
3. Navigate to `app/src/backend` and run `npm install` and `npx nodemon server`
4. The app should run at `localhost::4200`

