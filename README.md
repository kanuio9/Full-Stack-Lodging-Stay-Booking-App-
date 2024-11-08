#TravelNest

TravelNest is a full-stack web application that lets users search for, book, and manage unique accommodations around the world. It’s built to be similar to platforms like Airbnb, offering a seamless booking experience for travelers and an easy way for property owners to list and manage their rentals.

#Project Overview

TravelNest was created to make travel planning and property listing easy for everyone. Users can log in, explore various accommodations, and make reservations securely. Property owners can also register, manage their listings, and see booking details. This project is built with a strong focus on authentication, authorization, responsive design, and cloud integration for scalability.

#Features
User Authentication & Authorization , 
Secure Login and Registration: Uses email and password for secure authentication, with passwords safely hashed.
Roles for Users and Hosts: Regular users can browse and book properties, while hosts can add and manage their listings.
Authorization: Ensures users only have access to actions permitted by their role (e.g., only hosts can create new listings).
Property Listings and Search,
Browse Properties: Users can search for accommodations by location, price, property type, and dates.
Detailed Property Pages: Each listing includes images, descriptions, amenities, and reviews.
Booking System: Users can book available properties, and hosts are notified of new bookings.
Responsive Design,
Mobile-Friendly Layout: Built with a responsive layout that adapts to mobile, tablet, and desktop views using CSS frameworks like Bootstrap or custom media queries.
Easy Navigation: Simple, user-friendly navigation to make searching and booking easy on any device.
Cloud Integration,
Database Storage: Uses MongoDB Atlas (cloud-based MongoDB) to store data securely and scale as needed.
Image Hosting: Cloudinary or AWS S3 is used to store and serve property images, making pages load faster.
Deployment: Hosted on a cloud platform like Heroku, Vercel, or AWS for scalability and ease of deployment.
Flash Messages and Error Handling:

#Flash Messages: Notifies users of important actions, like successful bookings or account updates.
Error Handling: Custom error pages for 404s and server errors make the user experience smooth.

#Tech Stack
Frontend: HTML, CSS, Bootstrap, JavaScript, and EJS templates
Backend: Node.js, Express.js
Database: MongoDB (MongoDB Atlas for cloud storage)
Authentication: Passport.js for secure login and user session management
Image Storage: Cloudinary or AWS S3 for image hosting
Deployment: Hosted on cloud services like Heroku or AWS




#How Things Work Behind the Scenes
Authentication & Authorization: User data is securely managed with Passport.js, which makes sure only logged-in users can book properties. Hosts have additional permissions to list and manage accommodations.

Responsive Layout: All pages adapt to different screen sizes, making it easy to use TravelNest on mobile and desktop devices alike.

Cloud Services: By hosting our database on MongoDB Atlas and images on Cloudinary, the app can handle larger data loads and ensures fast image delivery.
Error Handling: Custom errors help keep users informed if something goes wrong, and flash messages provide feedback for successful actions (like successful bookings or account changes)


