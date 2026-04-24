# CS-465_Travlr-Express
Full stack travel web application built with the MEAN stack (MongoDB, Express, Angular, Node.js), featuring a customer-facing site and an admin SPA with JWT-based authentication.

# Travlr Getaways – Full Stack Web Application

This project is a full stack web application built using the MEAN stack (MongoDB, Express, Angular, Node.js). It includes both a customer-facing website and an administrator single-page application (SPA) for managing travel packages. The final version of the application also includes secure login authentication using JSON Web Tokens (JWT).

---

## Architecture

In this project, I worked with two different types of frontend development: a traditional Express-based website using HTML, JavaScript, and Handlebars templates, and a modern Angular single-page application (SPA).

The Express frontend follows an MVC structure where routes, controllers, and views are used to render pages dynamically. Each request reloads the page and returns rendered HTML from the server.

In contrast, the Angular SPA is component-based and provides a more dynamic user experience. Instead of reloading the page, Angular updates the interface in real time by communicating with the backend API. This allows for faster interactions and a smoother experience for administrators managing trip data.

The backend uses a NoSQL MongoDB database because it is flexible and works well with JSON-like data structures. Since the application stores trip data and user information, MongoDB allows for easy schema design and scalability without requiring strict relational tables.

---

## Functionality

JSON (JavaScript Object Notation) is a lightweight data format used for storing and transferring data, while JavaScript is a full programming language. JSON is used in this application to send data between the frontend and backend. The Express API returns JSON data, and Angular consumes that data to display and update the user interface.

Throughout the project, I refactored code multiple times to improve structure and efficiency. For example, I moved repeated API logic into Angular services, which made the code more reusable and easier to maintain. I also separated backend logic into controllers and models, which improved organization and readability.

Reusable UI components in Angular made the application more efficient because functionality could be reused without rewriting code. This improves scalability and makes future updates easier.

---

## Testing

Testing in a full stack application involves verifying API endpoints, request methods, and security layers. I used tools like Postman and PowerShell to test GET, POST, and PUT requests to ensure the API was working correctly.

Each endpoint serves a specific purpose:
- GET retrieves data
- POST creates new data
- PUT updates existing data

Security added another layer of complexity. I implemented JWT authentication, which requires a valid token to access protected routes. Testing involved verifying that requests without a token failed, while requests with a valid token succeeded.

This helped ensure that only authorized users could perform administrative actions.

---

## Reflection

This course has helped me gain a strong understanding of full stack development and how different technologies work together to build a complete application. I learned how to design and build both frontend and backend systems, connect them through APIs, and store data in a database.

Some of the most valuable skills I developed include working with RESTful APIs, using Angular to build a dynamic SPA, implementing authentication with JWT, and structuring applications using the MEAN stack.

These skills make me more marketable because I now understand how to build and secure real-world web applications from end to end, which is a highly valuable skill in software development and cybersecurity fields.
