# Introduction

This is a full server/client practice project for my local community.

## Problem

Everyone is currently using a single Whatsapp chatroom to share important news AND have small chit-chats. Important messages like maintenance payments, receipts and announcements are difficult to find.

## Solution

Write an single-page app with the following features:

- Upload and approve community-related payments
- And simple blog system for committees to post news and announcements

That way, the Whatsapp group can be be safely used exclusively for casual banter.

## Requirements

### User

- Able to create payment
- Able to edit payment

### Admin

- Able to approve a user's payment

### All users

- Able to view calendar of all users' payment statuses
- Able to view list of all user payments

## Self Notes

- If `styled-components` autocomplete does not work, try another option in `CTRL + SHIFT + P` > `Select TypeScript Version`
- If Prettier and Linters don't work correctly, try tweaking the `settings.json` values (via `CTRL + ,`):
  - `editor.formatOnSave`
  - `eslint.autoFixOnSave`
  - `tslint.autoFixOnSave`
- If TSLint doesn't work correctly with Prettier, see if the `parser` value is `typescript` in `.prettierrc` config
- If plugins don't work correctly, try checking the logs via `CTRL + P`
- Regarding folder structure for redux: I'm following the practice as proposed in [this article](https://resir014.xyz/posts/2018/07/06/redux-4-plus-typescript/) and [this article](https://hackernoon.com/redux-step-by-step-a-simple-and-robust-workflow-for-real-life-apps-1fdf7df46092). In a gist:
  - `components` - Dumb components. E.g.:
    - `Input.tsx`
  - `containers` - Smart components (connected to store). E.g.:
    - `LoginPage.tsx`
  - `store` - Contains store logic. Folders are separated by domains. Not sure if it's any better than grouping them by actions/reducer/types, though. E.g.:
    - `store/LoginPage/actions`
    - `store/LoginPage/reducer`
    - `store/LoginPage/types` - For definitions
  - Notes on testing [store-connected components](https://github.com/reduxjs/redux/blob/master/docs/recipes/WritingTests.md#connected-components)
  - References for connected redux components in typescript: [link](https://medium.com/knerd/typescript-tips-series-proper-typing-of-react-redux-connected-components-eda058b6727d)
  - Reference for [good React-Typescript practice](https://medium.freecodecamp.org/effective-use-of-typescript-with-react-3a1389b6072a) (Not necessarily true, but I'm using this as a starting point)
  - Notes on avoiding `connected-react-router`: [link](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/redux.md)
  - To debug node server, create a default Node `launch.json` configuration in current workspace, then just `CTRL + SHIFT + P` and attach the debugger to the `ts-node` process.
  - Styled Components: Install `vscode-styled-components` to get syntax highlighting and autocomplete!
  - For when I work on different machines and accidentally commit under a different user, use the script here in Terminal: [https://help.github.com/articles/changing-author-info/](link)

## Database setup

- Use `brew install postgres`
- Access the CLI via `psql postgres`
- Add the user role with superuser, in order to allow the use of the `pgcrypto` extension:
  - `CREATE USER <user> WITH SUPERUSER;`
- If you created a user by accident without adding the role, you can edit the user:
  - `ALTER USER <user> SUPERUSER;`
- Make sure the database exists:
  - `CREATE DATABASE <db name>;`
- Edit the `config.js` (refer to `config.template.js` for reference)
- Navigate to `/server` folder and run `yarn db-tb-setup`.

## Phase 1 Client code

- ~~Install react~~
- ~~Install webpack~~
- ~~Install babel~~
- ~~Configure babel to resolve js files~~
- ~~Configure webpack to use babel-loader~~
- ~~Add eslint + airbnb rules~~
- ~~Add prettier~~
- ~~Add jest~~
- ~~Convert project to TypeScript~~
- ~~Add jest for typescript~~
- ~~Add tslint~~
- ~~Add CSS-in-JS~~
- ~~Add redux~~
- ~~Add redux saga middleware~~
- ~~Add react-router~~
- Add react-router-redux
- ~~Add redux persistor~~
- Add debugger
- ~~Add CSS loaders~~
- ~~Add image/file loaders~~

## Phase 2 Server code

- ~~Setup server~~
- ~~Setup database~~
- ~~Setup API~~
- ~~Add eslint + airbnb rules~~
- ~~Add prettier~~
- ~~Add jest for typescript~~
- ~~Convert project to TypeScript~~
- ~~Add tslint~~
- ~~Add debugger~~

## Phase 3 Feature implementation

- Client UI
  - ~~Login page~~
  - Manage user details page
  - Payments page
    - ~~Get payments~~
    - ~~Add payment~~
    - Edit payment
    - Add attachment
    - Delete attachment
  - Admin page
    - Get payments (all users)
    - Approve payment
  - ~~Token expiry~~
- Server
  - ~~Public: Login~~
  - Public: Reset password
  - User: Change password
  - ~~User: Create new payment~~
  - ~~User: Edit payment~~
  - ~~User: Add attachment~~
  - ~~User: Add attachment file~~
  - ~~User: Delete attachment~~
  - ~~User: Delete attachment file~~
  - ~~Admin: Approve payment~~
  - ~~Admin: Add user~~
  - ~~Admin: Update user~~
  - ~~Super: Update house~~
  - Add SQL contracts

## Phase 4 Deploy

- Replace all hard-coded values with environment vars
- Get hosting & domain name
- Deploy

## Phase 5 Maintenance

- Setup Swagger
- Setup Selenium
- Add Selenium tests
- Setup docker for DB tests
- Add unit tests
- Add code splitting

## Phase 6 CI/CD

- Setup CI/CD pipeline
- Automate master updates to trigger new deployments
