# Introduction
If you've ever used the GroupMe web client before, you likely hate it just as much as the rest of us. It's outdated, clunky, and ugly. This ReactJs application is a simplistic, modern replacement for it.

# Usage
1. Clone repo
2. Create a GroupMe application [here](https://dev.groupme.com/applications)
3. Replace `REACT_APP_GM_CLIENT` in the `.env` file with your application key
4. `npm install && npm start`
5. Open `http://localhost:3000`
6. You will be redirected to the GroupMe SSO page
7. Sign in, and it will return you back to the application with the necessary `access_token`
8. That's it. Send the app link to your friends, or use the application for your own purpose

# Requirements & Dependencies
- [GroupMe API](https://dev.groupme.com/)
