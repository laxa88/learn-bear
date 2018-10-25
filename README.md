# Introduction

This is a full server/client practice project for my local community.

## Problem

Everyone is currently using a single Whatsapp chatroom to share important news AND have small chit-chats. Important messages like maintenance payments, receipts and announcements are difficult to find.

## Solution

Write an single-page app with the following features:

- Upload and approve community-related payments
- And simple blog system for committees to post news and announcements

That way, the Whatsapp group can be be safely used exclusively for casual banter.

## Self Notes

- If `styled-components` autocomplete does not work, try another option in `CTRL + SHIFT + P` > `Select TypeScript Version`
- If Prettier and Linters don't work correctly, try tweaking the `settings.json` values (via `CTRL + ,`):
  - `editor.formatOnSave`
  - `eslint.autoFixOnSave`
  - `tslint.autoFixOnSave`
- If TSLint doesn't work correctly with Prettier, see if the `parser` value is `typescript` in `.prettierrc` config
- If plugins don't work correctly, try checking the logs via `CTRL + P`

## Phase 1 TODO

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

## Phase 2 TODO

- ~~Setup server~~
- ~~Setup database~~
- ~~Setup API~~
- ~~Add eslint + airbnb rules~~
- ~~Add prettier~~
- Add jest for typescript
- ~~Convert project to TypeScript~~
- Add tslint

## Phase 3 TODO

- Client UI
  - Login page
  - Manage user details page
  - Payments page
  - Admin page
- Client Implementation
  - Login page
  - Manage user details page
  - Payments page
  - Admin page
- Server
  - Public: Login page
  - User: Change password
  - User: Create new payment
  - User: Edit payment
  - User: Upload attachment for payment
  - Committee: Approve payment
  - Admin: Add user
  - Admin: Update user (name, role, house)

## Phase 4 TODO

- Setup Selenium
- Add Selenium tests
- Add tests and coverage to 100%
- Add CSS loaders
- Add image/file loaders
- Add code splitting
- Add CI pipeline

## Phase 5 TODO

- Get hosting & domain name
- Setup docker
- Deploy
