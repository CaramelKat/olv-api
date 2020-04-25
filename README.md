# What is this?
This is the Pretendo Network Miiverse API Server, which replaces the former Nintendo Network Miiverse API Server *.olv.nintendo.net
# Install and usage
First install [NodeJS](https://nodejs.org) and [MongoDB](https://mongodb.com). Download/clone this repo and run `npm i` to install all dependencies. Edit `src/config.js` to your liking. Run the server via `npm run start`.
# To-Do
- [x] Discovery Server
- [ ] Posts Server
- [ ] Topic Server
- [ ] Communities Server
- [ ] Integrate with PN account server
# Currently implemented endpoints
- [GET] https://discovery.olv.nintendo.net/v1/endpoint
