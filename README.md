# Simply Weather, Data, and Mapping

**A proof of concept for utilizing the Open Weather API, the ANU Quantum Random Numbers Server, and Mapbox to create a Full Stack MERN application in REACT. The application first loads to a blank map and a dropdown down menu. From there the user can select their desired amount of coordinates randomly returned from [Quantum](https://qrng.anu.edu.au/API/api-demo.php). After returning the API call MapBox-GL plots the resulting coordinates. THe user can then click a map pin and a modal will display the pins latitude, longitude and several weather data points. User can then save the item to the backend MongoDB database or simply click another. From that point the user can click the Saved Points link which will then load the the saved items from the database. User can decide to delete data as choosing**

![Demo](./client/public/simple.webm)

## Getting Started
 After forking or doing a git pull, you will need to run a npm i package.json. This will install the major dependencies for both package.jsons. 
```
npm i
```

## Prerequisites 
Make sure you have the newest node.js installed.

## Installing 
Ensure you have obtained a Mapbox API key. This will need to go inside your  .env file at the local level. 
Inside your .env file
```
REACT_APP_MAPBOX_TOKEN=" ";
```

## Instructions for deployment 
* Deploy your full-stack application to Heroku. Make sure to perform the following:
* Initialize the project folder as a git repo by running a `git init`. Make sure you run this command at the same level as your 'server.js' file. (If you get an error message telling you a repository already exists, run `rm -rf .git` followed by `git init`.)
* Add a .gitignore at the same level as your server.js and add the line `node_modules` as the content of this file. You may wish to base your .gitignore on [an example like this](https://github.com/github/gitignore/blob/master/Node.gitignore).
* Create a Heroku app for your application, either via the command line `heroku create` or through the Heroku website.
* Provision a MongoLab (MLab) Addon through Heroku.
* If you would like to store your changes in a Git repo and you don't already have your folder linked up to GitHub, [follow these steps](https://help.github.com/en/articles/adding-an-existing-project-to-github-using-the-command-line). Make sure NOT to initialize this GitHub repository with either a README, license, or .gitignore.
* Add and commit your changes before pushing up to Heroku (`git push heroku master`).
* Once your site is deployed, you can seed your remote database by running the following commands: `heroku run bash` then `node scripts/seedDB.js`. Once this is complete, run `exit` to exit Heroku bash. Your database should now be seeded!

## Built With

* [REACT JS](https://reactjs.org/) - REACT client facing Framework
* [MongoDB](https://www.mongodb.com/) - Database storage frame
* [Mongoose](https://mongoosejs.com/) - MongoDB object modeling for node.js
* [Material UI](https://material-ui.com/) - CSS Framework within REACT
* [ANU Quantum Random Numbers Server](https://qrng.anu.edu.au/API/api-demo.php) - Random number API
* [Mapbox-GL JS](https://www.mapbox.com/) - MapBox API
* [MomentJS](https://mongoosejs.com/) - Moment Js timestamp converter

## Author
* **McCabe Northup** - *Initial work* - [mnorthup2207](https://github.com/mnorthup2207)



