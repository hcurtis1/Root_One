# Root One Web App

## Overview

### What is the app for? 

This is a web application for 'Root One', a health foods company. 

### What does it do?

The web app allows users to learn about the company, view its products, blog recipes, interactivity with social media, and provide methods of contact to the comapny. As well as this, ability to join mailing list. 

### How does it work? 

An app displaying information with HTML and Javascript (Predominantly through JQuery). Frameworked with Angular. Mailing List function to be determined. Styling through CSS files and Bootstrap. 

## Features

### Features existing

None as of yet.

### Features to be added

- Information (User) based Features
	- Interactive home page
	- About company page
	- List of products page
	- Details Products pop up
	- Blog reel of recipes using product
	- Window for twitter feed. 
	- details of owner and how to contact
	- maps locator of offices. 

- functional features
	- User submit a recipe
	- User request mailing list


## Tech Used

### Some the tech used includes:
- [AngularJS](https://angularjs.org/)
    - We use **AngularJS** to handle page routing, we also use it to make calls to the REST API and build custom directives
- [Bootstrap](http://getbootstrap.com/)
    - We use **Bootstrap** to give our project a simple, responsive layout
- [npm](https://www.npmjs.com/)
    - We use **npm** to help manage some of the dependencies in our application
- [bower](https://bower.io/)
    - **Bower** is used to manage the installation of our libraries and frameworks

## Contributing
 
### Getting the code up and running
1. Firstly you will need to clone this repository by running the ```git clone <project's Github URL>``` command
2. After you've that you'll need to make sure that you have **npm** and **bower** installed
  1. You can get **npm** by installing Node from [here](https://nodejs.org/en/)
  2. Once you've done this you'll need to run the following command:
     `npm install -g bower # this may require sudo on Mac/Linux`
3. Once **npm** and **bower** are installed, you'll need to install all of the dependencies in *package.json* and *bower.json*
  ```
  npm install
 
  bower install
  ```
4. After those dependencies have been installed you'll need to make sure that you have **http-server** installed. You can install this by running the following: ```npm install -g http-server # this also may require sudo on Mac/Linux```
5. Once **http-server** is installed run ```http-server -c-1```
6. The project will now run on [localhost](http://127.0.0.1:8080)
7. Make changes to the code and if you think it belongs in here then just submit a pull request