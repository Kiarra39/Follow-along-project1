# E- Commerce Website
---
## Milestone-1 Project Overview

1. Authentication: Login, logout, Signup
2. Product Page: Displays all products
3. Order Page: Shows the orders for each user
4. Payment Gateway


## Milestone-2


### Key Features and Steps Completed:

Organized the project into two different folders of frontend and backend.

* Frontend Setup:

1. Created a new React app using npm createvite@latest ecom_frontend to handle the front end.   
2. Configured Tailwind CSS

* Backend Setup:  

1. Ran npm init -y to initialize backend    
2. Installed Express to develop the backend server, Mongoose, and CORS using npm i express mongoose cors and nodemon.     
3. Created the Login page with input fields for email and password.            
4. Handled the input of the user by creating email and password state with the help of useState hook.         
5. Used Tailwind CSS for styling the Login page.


## Milestone -3

Organized files and folders for better readability and functionality

* Server Setup:    
1. Developed a backend server with Node.js and Express and handled Api requests      
2. Set up the server to listen  for a specific port for incoming requests
*  Database Connection      
1. Connected MongoDB to handle data storage.
2. Ensured a successful connection  between the server and database.
*  Error Handling    
Added an error messages with better debugging.

## Milestone 4 

1. User Model: This defines how data is structured for users with names, emails, passwords, and how they go about their storage in the database.     
2. User Controller : Controls the operations like create, update, or retrieve the user details from the database.   
3. Multer Setup: File handling, for instance, for saving the user profile picture or other files.  


## Milestone 5

1.Created the Sign-Up Page (UI):

* Used React to build the page with input fields for Name, Email, and Password.
* Styled the page using Tailwind CSS 

2.Implemented Form Validation:

For Name: Ensured it is at least 2 characters long and does not contain symbols.         
For Email: Validated the email format (e.g., name@example.com).         
For Password: Checked for a minimum of 8 characters and the inclusion of uppercase, lowercase, numbers, and special characters.

3.Routing:

* Used React Router to set up navigation between pages, like moving from the Sign-Up page to the Login page.         

4.Validation Logic:   

Created a ValidationObject.js file to handle the logic for checking if the user inputs met the validation criteria.