What i have done so far using only pure javascript,take a look
1. After cloning the repo and installing the dependencies in the server folder, you should next [setup mongodb](https://docs.mongodb.com/manual/installation/) locally and copy the connection url to the required place in `server/models/mongo.config.js`.
2. Navigate to server directory, run `npm install` then run `npm start` in the server folder (btw, cors are enabled so you can run server if you want on a separate port).
3. work with the following functionalities:
   - [ ] Submit a video request. (API: POST -> `/video-request`)
   - [ ] Show list of requests below the form. (API: GET -> `/video-request`)
   - [ ] Vote up and down on each request. (API: PUT -> `/video-request/vote`)
   - [ ] Sorting options `new first` the default one, and `top voted first`.
   - [ ] Search box to search for video requests.
   - [ ] Client-side validation for the fields with * as required and for the email field, topic title should be max 100 length.
   - [ ] Add signup/login form with email.
   - [ ] Make votes unique so no one could cheat, using unique user, enhance the voting experience.
   - [ ] Make a super user capabilities, delete, add resolution video, and change status. all are only visible to him.
   - [ ] Add style to the super user capabilities and make filter by request statuses (`NEW`, `PLANNED`, `DONE`).
4. the requests work using AJAX to make the project looks like a SPA.
5. Check all payloads in the schema at `server/models/video-requests.model.js` and check the endpoints at `server/index.js`
**pure JavaScript** code without using any external utility or libraries.


