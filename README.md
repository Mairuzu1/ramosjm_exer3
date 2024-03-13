# Reposted from https://github.com/Mairu13

## JavaScript Basics 1 - Password Validation Program in JavaScript

A requirement fulfilled for course CMSC 100

Made by John Miles Ramos / BSCS

## To use:

[1] Must install NodeJS first:

For Ubuntu
- https://github.com/nvm-sh/nvm#installing-and-updating.
After installing it, restart the terminal and run nvm install stable to install the stable
version

For Windows
- Download the installer at https://nodejs.org/en/. Select the LTS version.

## Check Node version with:

    node -v
    
**The Node version used is 20.11.1**

[2] Locate the project file through the terminal with "cd" 

## Expected outcome:

Running it through the terminal with *console.log* it should return the following:
  
    console.log(storePassword("John", "Pass1234", "Pass1234")); 

  // returns {name: "John", newpassword:"4321ssaP"}
  
    console.log(storePassword("John", "Pass123", "Pass12345"));

  // returns {name: "John", newpassword:"Pass123"}
