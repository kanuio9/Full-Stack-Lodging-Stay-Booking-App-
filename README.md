> TravelNest

# TravelNest

**TravelNest** is a full-stack web application for discovering and booking unique accommodations worldwide, similar to platforms like Airbnb. It provides a seamless experience for travelers and an intuitive way for property owners to list and manage rentals.

## Project Overview

TravelNest aims to simplify travel planning and property management. With a strong focus on **authentication**, **responsive design**, and **cloud integration**, this project allows users to explore and book accommodations securely. Property owners can also manage their listings and view booking details.

---

## Key Features

### User Authentication & Authorization
- **Secure Login and Registration**: Uses email/password authentication, with hashed passwords for security.
- **Role-Based Access**:
  - **Users**: Can browse and book properties.
  - **Hosts**: Can add, edit, and manage their property listings.
- **Authorization**: Ensures role-based access so users have permissions specific to their roles (e.g., only hosts can create new listings).

### Property Listings and Search
- **Browse Properties**: Search by location, price, type, and dates.
- **Detailed Listings**: Each property has images, descriptions, amenities, and user reviews.
- **Booking System**: Users can book properties based on availability, with hosts receiving booking notifications.

### Responsive Design
- **Mobile-Friendly**: Layout adapts to mobile, tablet, and desktop views using CSS frameworks like Bootstrap or custom media queries.
- **Easy Navigation**: Simplified navigation to enhance the booking experience on all devices.

### Cloud Integration
- **Database Storage**: Utilizes **MongoDB Atlas** for secure, scalable data storage.
- **Image Hosting**: Images are stored and served via **Cloudinary** or **AWS S3**, optimizing page load speeds.

### Flash Messages and Error Handling
- **Flash Notifications**: Inform users of important actions, like successful bookings or account updates.
- **Custom Error Pages**: Handles 404 and server errors gracefully, maintaining a smooth user experience.

---

## Tech Stack

### Frontend
- **HTML**, **CSS**, **Bootstrap**, **JavaScript**
- **EJS templates** for server-side rendering

### Backend
- **Node.js** and **Express.js** for server logic
- **Passport.js** for secure user authentication

### Database
- **MongoDB Atlas** for cloud-based data storage

### Image Storage
- **Cloudinary** or **AWS S3** for fast, secure image hosting

---

## Behind the Scenes

- **Authentication & Authorization**: Manages user roles with **Passport.js**, securing actions based on roles.
- **Responsive Layout**: Pages are designed to adapt seamlessly across devices.
- **Cloud Services**: Leverages MongoDB Atlas and Cloudinary for efficient data and media handling.
- **Error Handling**: Custom error pages and flash messages keep users informed and guide them through the app.

---

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/username/TravelNest.git
2. **Navigate to Project Folder**
   ```bash
   cd TravelNest
3. **Install Dependencies**
   ```bash
   npm install
4. **Environment Variables**
   ```bash
   MONGO_URI=<your_mongo_db_uri>
   CLOUDINARY_API_KEY=<your_cloudinary_api_key>
   CLOUDINARY_SECRET=<your_cloudinary_secret>
5. **Run the Application**
   ```bash
   npm start

## Contributing
Contributions are welcome! Feel free to submit issues or pull requests to help improve TravelNest.

## License
This project is licensed under the MIT License.

