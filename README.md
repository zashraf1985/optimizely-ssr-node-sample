## Summary
This is a sample that uses Optimizely React SDK to do Server side rendering using Node/Express backend. The backend uses a hardcoded datafile in synchrnous mode while the frontend uses SDK key along with a datafile manager to enable dynamic updates.

## How to Use

### Install packages
`yarn install`

### build react app
`yarn build`

### Start Express server
`IS_SERVER_SIDE=true node server/`

### Use the app
1. Open the url [http://localhost:9000](http://localhost:9000) in the browser
2. Check the network tab and analyze the response from server. it should contain the initally rendered html. This means the serve side rendering is working.
3. Click the `Increment` button. If it incremenets the counter, it means client app is correctly hydrated and is working.
4. Try changing variation from `app.optimizely.com`. If the change reflects dynamically, it means the datafile manager autoupdate is also working on the client.