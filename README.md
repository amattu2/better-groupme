# Introduction

If you've ever used the GroupMe web client before, you likely hate it just as much as the rest of us. It's outdated, clunky, and ugly. This ReactJs application is a simplistic, modern replacement for it.

> *Note*: Development is still in progress.

# Setup & Usage

1. Clone repo
2. Create a GroupMe API application [here](https://dev.groupme.com/applications)
3. Clone the `.env.example` file and rename it to `.env`
4. Replace `REACT_APP_GM_CLIENT` in the `.env` file with your application key
5. `npm install && npm start`
6. Open `http://localhost:3000`
7. You will be redirected to the GroupMe SSO page
8. Sign in, and it will return you back to the application with the necessary `access_token`
9. That's it. Send the app link to your friends, or use the application for your own purpose

# To-do

## Overall Functionality / Usability

- [ ] WebSocket implementation
- [ ] Conversation Archive
- [ ] App/User Settings

# Bots

- [X] Bot Information Display
- [ ] Bot Create or Clone

# Contacts

- [ ] User list
- [ ] Search

# Messaging

- [ ] Message Likes
- [ ] Message Quotes
- [ ] Group Poll Submit/Results/Etc
- [ ] ... all other message types

# Requirements & Dependencies

- [GroupMe API](https://dev.groupme.com/)
- Node.js v16
- React.js v17
