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
1. Sign-Up Page UI Created a Sign-Up Page with React with fields that include:       
Name        
Email     
Password         

2. Form Validation           
Used a validation object developed by applying Regular Expressions to test:            
Name: Must not be empty and characters.         
Email: Should meet proper email format, such as example@example.com.         
Password: Secured by checking for security such as minimum length          

3. React Router Configuration                  
Configured React Router for easy navigation between pages          
Set up routing for the present page.   


## Milestone-6

1. JWT Token Generation: During signup, a JSON Web Token is generated for the user. The JWT token has the email of the user and is used for email verification.

2. Verification Link: A unique URL is generated by inserting the JWT token. This URL is sent to the email of the user.

3. This app is configured to send a verification email via Nodemailer. It contains the verification link with a JWT token.

4. Token Verification Endpoint
It creates an endpoint that checks the token whenever the user clicks the verification link. If it's valid, the user's account will be activated.


## Milestone -7 

Signup:

User will send their name, email and password.   
Checks if user exists in database:    
If User exists: returns a message to login.  
If User Does not exist: hashes the password through bcrypt and stores the user into database.

Login:

User will send his/her email and password. 
Checks if user exists in database:   
If The user is found: entered password is compared with the hased password  
And if valid, then, generates a JWT token and send it as a cookie.   
It gives error asking the user to sign-up in case of being invalid.    

Route: 
POST /signup-for user sign up hashing of password    
POST /login - For user login with password validation and token generation.

## Milestone 8

Card Component:     

Accepts product details such as title, image, price, etc. as props.                      
It displays an image, product name, price, discount percentage if available, and a button for adding to the cart.         


Homepage Layout:         
   
Shows multiple cards in a 3-column grid layout.                 
It uses Tailwind CSS classes  in order to create  flexible design.


## Milestone 9
Created Product Entry Form: A form to input product details such as title, description, price, etc.      

Used FormData: Made the form data and images by doing a network call to the server using FormData in uploading files.

Submitted Data: The data has been submitted to the back end using a POST request to store the product detail in the database.



## Milestone 10

Product Schema: Defined a Mongoose schema for product details, such as title, description, price, etc., along with validation. 

File Upload: Multer is used for file uploads and Cloudinary for cloud image storage.
    
POST Endpoint: Created a POST endpoint that receives product data, uploads images to Cloudinary, and saves all details in MongoDB.     


## Milestone 11


1. First we set up a route and created a get request.
2. Used a database query to retrieve the data and then send that data to the client.
3. Handled errors accoridngly.


## Milestone 12


1. Fetched products from the backend with axios using a get request.
2. useEffect() is used to load the products.
3. Used the Card component to display the product with its details.

## Milestone 13 

### Backend :
Created a PUT route to handle the update functionality. Allows data to be modified for a specific item which it accesses by its unique id.

### Frontend:
1. Created a page where users can update product details.
2. Fetch the current product's data from the backend using its id and fill the input fields (except for images) with the existing values of that product.


## Milestone 14
  ### DELETE Route in Backend:

Created a DELETE endpoint that listens for requests with a product ID.
Extracts the ID from the request and deletes the matching product in MongoDB.
Sends a success or error response to confirm the action.

### Delete Button in Frontend:
Added a delete button to each product card in the Card.jsx file.     
On button click,  a DELETE request is sent with the product ID to the server.         
Updates the UI to remove the deleted product after a successful response.

## Milestone 15 

1. Added Navbar component [Mobile Responsive with Drop Down]

## Milestone 16

1.Single Page Product Details: Implemented a detailed view for individual products, allowing users to see all product-specific information on a dedicated page.
2. Image Modal Component: Developed a  modal to display product images in an enlarged view when clicked, .

## Milestone 17

Create Cart Schema
Create Controller: Implement  addToCart functions.
Create Routes: Add GET and POST routes for cart operations.
Link Routes: Connect routes to your server.


## Milestone 18

Create a GET /cart route that retrieves the user's cart, fetches product details, and returns the data. Use jwtVerify middleware for authentication.

## Milestone 19 
Cart UI: Created a cart page to display products .
Fetch Cart Details: Fetched user's cart data from the backend and displayed items dynamically.

## Milestone 20 

Implemented the UI for the profile route, displaying user details.
Created a backend route to fetch and provide user data such as profile information and address.

## Milestone 21

State for Address: A state is created using useState to store address details like city, country, zip code, etc.

## Milestone 22

* A POST endpoint (/add-address) is created to receive address data from the frontend.      
* The user's JWT token is verified to ensure authentication.
* The address is added to the user's addresses array in the database, and the updated profile is saved.

## Milestone 23 

### Backend:
* Created an API to fetch user addresses.
* Secured it using JWT authentication      middleware.
*Validated user ID before querying the database.
*Retrieved addresses from the database and handled errors properly.
*Added the route in user.route.js.

### Frontend:
* Routing: Added a route for the "Select Address" page and linked it to the "Checkout" button in the cart.

* Address Selection Page:
Fetched addresses from the backend using useEffect.       
Included the JWT token in API requests.
Stored addresses in state and passed them to AddressList. 

* Address List Component:
Displayed addresses dynamically.
Allowed users to select an address and stored it in localStorage.
Redirected users to the order confirmation page upon selection.

## Milestone 24 
* Routing: Added a route for the Order Confirmation page.

* Order Confirmation Page:
  Fetched cart data from the backend.
  Retrieved selected address from localStorage.
  Calculated total order value and displayed cart items using CartCard.
  Added a "Confirm Order" button.

*Cart Card Component: Updated to display the first image from the images array correctly.

## Milestone 25

* Order Model: Defined schema with user reference, order items, shipping address, total amount, status, and timestamps.

* Order Route: Created POST /confirm-order with JWT authentication for secure order creation.

* Order Controller:
   Validates user and product data.
   Creates separate orders per product with the same address.
   Stores order details in MongoDB and responds with success or error messages.

   ## Milestone 26
* Added OrderRouter to manage order-related routes.
* Implemented GET /user-orders-data to fetch user orders.
* Validated userId and checked user existence in the database.
* Retrieved orders from OrderModel and returned them in the response.
* Secured the endpoint with JWT authentication.


## Milestone 27

### Frontend Enhancements:
* Created OrdersPage to display all user orders.
* Added " Orders" link in the Navbar for easy navigation.

### API Integration:
* Sent a GET request to /order-history endpoint.
* Included the user’s email in the request to fetch their orders.

### Data Handling & Display:
* Retrieved user orders from the backend.
* Displayed the order details dynamically on the Orders page.

## Milestone 28 

### Backend Changes
* PATCH /cancel-order Endpoint – Accepts orderId, updates order status to "Cancelled".
* Validation – Ensures only the correct user can cancel their own orders.
* Response Handling – Sends a success message upon successful cancellation.

### Frontend Changes
*  Order History Page – Added a "Cancel Order" button (visible only if the order isn’t canceled). Updates the UI dynamically.
* Cart Page – Ensured the "Checkout" button redirects properly for order confirmation and shipping address entry.
*  CartCard Component – Handles order cancellation logic, ensuring the button disappears after cancellation.
*  Order History Page Refresh – Updates the order list dynamically after cancellation.


## Milestone 29 && 30 

### Backend Changes
* Payment Routes & Controller – Created Payment.route.js and Payment.controller.js to handle order creation and payment processing.
* Payment Model – Defined Payment.model.js to store transaction details.
* App Configuration – Integrated payment routes into app.js and secured Razorpay API credentials in .env.

### Frontend Changes
* Added the checkout script in index.html.
* Created Razorpay.js to manage payment requests.
* Order Confirmation Page – Implemented a handlePay function, displays the total amount, and redirects users after successful payment.


## Milestone 31

In this milestone, we set up Redux to globally manage the user's email state in a React application. Here's a brief breakdown of what is done:

1. Redux Store Setup (src/Redux/Store.js)

* We use configureStore from @reduxjs/toolkit to create a Redux store.
* The store is configured with a userReducer to manage the email state.
* The store is exported for use across the app.

2. Action Creator (src/Redux/User/UserActions.js)

* We define setUserEmail, an action creator to update the user's email in the global state.
* Inside setUserEmail, we dispatch the setEmail action to modify the Redux state.

3. User Slice (src/Redux/User/UsersSlice.js)

* An initial state is created with email set as an empty string.
* We use createSlice to define the setEmail reducer function.
* The setEmail action and reducer are exported for use in the store and components.

4. Login Component (src/component/auth/Login.jsx)

* useDispatch from react-redux is used to dispatch the setUserEmail action after a successful login.
* The entered email is stored in the Redux store.

5. Main App Setup (src/main.jsx)

* The Provider component from react-redux is used to wrap the App component.
* The Redux store is passed as a prop to Provider, making the global state accessible throughout the app.