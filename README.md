# Member's Only Message Board
A message board site that allows authenticated users to leave messages.

## Table of Contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Deployment](#deployment)
- [Author](#author)

## Overview

### The challenge

Create a site that displays messages from authenticated users. Users can create an account, log in, and submit a message. Messages are visible to all users, but author info is only displayed to authenticated users.

### Screenshot

![image](https://github.com/singhalex/members_only/assets/115970252/ffa4f19e-57fa-4ad4-83fb-17f3cde88b83)


### Links

[Live Site](https://cat-instinctive-purchase.glitch.me/)

## My process

### Built with

- NodeJS
- Express
- ejs
- MongoDB
- Mongoose
- Passport.js
- bcryptjs
- PicoCSS

### What I learned

I learned how to encrypt user passwords using bcryptjs to store hashed and salted passwords in a mongoDB database. This allows me to store user login information without actually storing any passwords and risk having them leak. When a user logs in, bcryptjs is used again to compare the log in info to the stored entry in the database in  order to authenticate the user.

Passport is used to handle the user authentication using the local strategy (username and password) and creates a session that keeps the user logged in for a set amount of time.

I also learned how to use the ejs templating language along with the session data to conditionally render the page according the user status and rights.

### Continued development

Adding the ability to edit user info and posts would be a worthwhile addition. It would require manipulating database data, but would add some flexibility to site. This would require checking whether the post is attributed the logged in user in order to allow the data to be edited.

I would also like to store the session in a MongoDb database to alleviate the stress on the server.

### Useful resources

- [User Authentication in Web Apps](https://youtu.be/F-sFp_AvHc8?si=XGdJhloD3xqi07NB) - An in depth explanation of how Passport.js works in order to authenticate the user
- [The Odin Project - Authentication Basics](https://www.theodinproject.com/lessons/nodejs-authentication-basics) - A tutorial on how to implement authentication

## Demployment

How to install this project locally:

1. Clone the repository:
```
 SSH - $ git clone git@github.com:singhalex/members_only.git
```
2. Move to the cloned directory
```
  $ cd members_only
```
3. Install the dependencies
```
  $ npm i
```
4. Create a .env file
```
  $ touch .env
```
5. You will need to add the following variables to the the .env file:
   - MONGO_URI - to connect to your mongoDB database
   - SESSION_SECRET - used to create a session for a logged in user 

## Author

- Website - [Github](https://github.com/singhalex)
- LinkedIn - [Alex Singh]https://www.linkedin.com/in/alex-singh-748000254/)
