### ProjectSound
A web app that provides the ability for users to upload and share audio and
sheet music files with other users in groups that they create, fostering
collaboration between musicians for music projects.

The system provides the following functionality:
- upload files to a group
- version control of files (both audio and sheet music)
- create groups, add users, set privacy settings
- play audio files inside the app, view sheet music in app
- register using google login, login, logout
- manage user permissions inside a group
- forum for users to communicate and share files
- a clean, clear and unambiguous design
- secure services
- FAQ for user support
- accessibility for impaired users
- search for groups, users, music

### Files

 - `config.js` - configuration options for server, port and db login
 - `public/*` - client side pages and js
 - `db.sql` - sql commands for setting up the database
 - `package.json` - package info and dependencies
 - `server.js` - js code for server
 - `test.js` - js QUnit tests

### Installation and setup (for debian vm incase anyone wants to do this)
(server is built + deployed on a debian 9.8.0 amd64 vm (its easy to
destroy the vm and rebuild it when i f* everything up))

1. install curl for new packages `apt-get install curl`

2. do `curl -sL https://deb.nodesource.com/setup_10.x | bash -`
then `apt-get install -y nodejs`

3. install mysql server `apt-get install mysql-server`

4. install git `apt-get install git`

5. Download or clone the source code for the server into a location of your
choosing
`git clone -b proto https://github.com/C-Porter/ProjectSound.git`

6. Enter the project folder `cd ProjectSound`

7. install the package dependencies `npm install`

8. set up the mysql server
8.1. open db.sql in the local repo
8.2. copy contents
8.3. in terminal `mysql -y root -p`
8.4. paste contents into terminal and hit enter, should create db + tables
8.5. exit db `exit`

9. start the server `node server.js`
should see the response `Server started, listening on port 8080` and
`Database connected succesfully` in terminal
