To start the the mongo and app docker containers, make sure that you have docker installed with the command `docker --version`. Next, open docker desktop, and move to the directory of the app. Run `npm run dev-env` to begin the web server in development mode. This command will start both containers, and begin the webserver using nodemon, which updates the app automatically when file changes are made. All you need to do is refresh your browser. 

Later, `npm run prod-env` will launch a production ready environment.

We can add data by starting the app and going to the create page. At this point, direct your browser to `http://localhost:8080/create`, and you should see a screen to create a new graph. Once you do so, a code will pop up (a random 6-digit code like ABC123), and you can go to `http://localhost:8080/edit/ABC123` to edit points in the graph, and `http://localhost:8080/ABC123` to view the aggragate of the points submitted.

All client-side javascript is stored in `public/js`, and assets such as css and image files are stored in `public/assets`. The view templates are stored in `views`, and they are responsible for taking data from the server and injecting it into the client-side scripts.
