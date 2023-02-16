# Social Network API

## User Story

A major factor is cost in a startup and the goal of my social media startup is to have an API for the network that utilizes that model. This will allow the website to manage significant amounts of unstructured data efficiently.

## Project Objective

The objective is to build an API for a social network web application that allows users to share their thoughts, react to friends' thoughts, and create a friend list using Express.js for routing, a MongoDB database, and the Mongoose ODM. No seed data is provided, so users must create their own data using Insomnia. A walkthrough video demonstrating the functionality of the application and meeting certain acceptance criteria must also be created and submitted.

## Technical Workflow 

The given social network API can be invoked by a command, which starts the server and syncs Mongoose models to the MongoDB database. When the API GET routes for users and thoughts are opened in Insomnia, the data is displayed in a formatted JSON. When the API POST, PUT, and DELETE routes are tested in Insomnia, users are able to successfully create, update, and delete users and thoughts in the database. Additionally, users are able to create and delete reactions to thoughts and add and remove friends from a user's friend list when testing the API POST and DELETE routes in Insomnia.

## Mock Up

The following animations show examples of the application's API routes being tested in Insomnia.

The following animation shows GET routes to return all users and all thoughts being tested in Insomnia:

![Demo of GET routes to return all users and all thoughts being tested in Insomnia.](././Main/Assets/18-nosql-homework-demo-01.gif)

The following animation shows GET routes to return a single user and a single thought being tested in Insomnia:

![Demo that shows GET routes to return a single user and a single thought being tested in Insomnia.](././Main/Assets/18-nosql-homework-demo-02.gif)

The following animation shows the POST, PUT, and DELETE routes for users being tested in Insomnia:

![Demo that shows the POST, PUT, and DELETE routes for users being tested in Insomnia.](././Main/Assets/18-nosql-homework-demo-03.gif)

In addition to this, your walkthrough video should show the POST, PUT, and DELETE routes for thoughts being tested in Insomnia.

The following animation shows the POST and DELETE routes for a user’s friend list being tested in Insomnia:

![Demo that shows the POST and DELETE routes for a user’s friend list being tested in Insomnia.](././Main/Assets/18-nosql-homework-demo-04.gif)

### Technical Tools 

Uses the Mongoose package(https://www.npmjs.com/package/mongoose) to connect to a MongoDB database.

Uses the Insomnia app (https://docs.insomnia.rest/insomnia/get-started) to make test Routes and APIs after installing on my local machine. 


Stores sensitive data, like a user’s MySQL username, password, and database name, using environment variables through the dotenv(https://www.npmjs.com/package/dotenv) package.

## License

![license](https://img.shields.io/badge/license-MIT-blue.svg)

## 📝 Notes

- These are the (2) items required for submission
  1.  A walkthrough video 
      
  2.  The URL of the GitHub repository that contains your code
      https://github.com/phagn131/social-network-api

## Contact Information:
- Github: [phagn13@github.com](https://github.com/phagn13@github.com)
- Email: [chloetechnologies@gmail.com](user@email.com)
