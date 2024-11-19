# Contact-management-system

 ### Contacts Table 
![1](https://github.com/user-attachments/assets/aaeda493-5090-4008-aa9a-6decd943a89f)


- Displays a searchable, paginated table of contacts with columns for **Name**, **Email**, **Phone Number**, **Company**, **Job Title**, and **Actions**.
- **Edit** and **Delete** action icons enable contact management.

### Add Contact
![2](https://github.com/user-attachments/assets/222c6fd5-9bcb-4190-a8bd-7ef50f94f06d)


- A form with fields for **First Name**, **Last Name**, **Phone Number**, **Email**, **Company**, and **Job Title**.
- Icons accompany each input field, with **Done** and **Cancel** buttons below.



## Project Description

The Contact Management System is a full-stack application that allows users to manage their contacts efficiently. Built using React for the frontend and Node.js with Express for the backend, this application provides a user-friendly interface for adding, editing, deleting, and viewing contacts. The contacts include essential details such as first name, last name, email, phone number, company, and job title. The frontend leverages Material UI (MUI) for a clean and responsive design, while the backend is powered by PostgreSQL to store contact information.

## Features

Add Contacts: Users can add new contacts with required details.
Edit Contacts: Existing contact information can be modified easily.
Delete Contacts: Users can remove contacts from the list.
Search Functionality: Contacts can be searched by any attribute including name, email, phone number, company, or job title.
Pagination: The contact list is paginated for easy navigation through large datasets.
Responsive UI: The application features a professional and visually appealing interface using MUI components.

## Technical Decisions

**Database Choice**: PostgreSQL was selected as the database due to its robustness and support for complex queries, which may be beneficial as the application scales. The relational structure of PostgreSQL is ideal for maintaining contact information.
**UI Framework**: Material UI was chosen to build a consistent and responsive user interface. It provides a wide range of pre-built components, which helped create a professional look for the application.

## Project Structure
**Frontend**: Built with React and MUI.
**Backend**: The backend is a REST API created using Node.js and Express, providing endpoints for creating, reading, updating, and deleting contacts.
**Database**: PostgreSQL is used to store contact details, with each contact record containing fields for first name, last name, email, phone number, company, and job title.

## Get Started

To get started with the Contact Management Application, clone the repository and follow the instructions:

### 1) Clone the repository 
    ```bash
    git clone https://github.com/yourusername/contact-management.git

### 2) Navigate to the project directory:
     ```bash
     cd contact-management
    
### 3) Install dependencies for both frontend and backend:
     ```bash
      cd client
      npm install
      cd ../server
      npm install

### 4) Replace your_db_username and your_db_password with your actual PostgreSQL credentials.

### 5) Start the application:
#### For the server:
     ```bash
     node server.js
#### For the client:
     ```bash
     npm start


![3](https://github.com/user-attachments/assets/d7d400ca-44f0-461d-a14e-9f75fa3573b2)



### Database Schema:
  ```bash
    CREATE TABLE contacts (
      id SERIAL PRIMARY KEY,
      first_name VARCHAR(50) NOT NULL,
      last_name VARCHAR(50) NOT NULL,
      email VARCHAR(100) NOT NULL UNIQUE,
      phone VARCHAR(15),
      company VARCHAR(100),
      job_title VARCHAR(100)
    );
```
# Problems Faced
  1) Having never used PostgreSQL in a MERN project before, I found it challenging to integrate and utilize this relational database effectively. However, this project provided an excellent opportunity for me to learn and gain hands-on experience with PostgreSQL.
  2) Working with Material UI (MUI) presented its own set of challenges, as I had not previously used this library. I encountered several issues and errors during implementation, which required me to seek assistance from AI resources and YouTube tutorials to better understand MUI's components and best practices.
  3) Selecting the appropriate color scheme and overall styling for the frontend took more time than anticipated. I aimed to create a visually appealing and cohesive design, which involved multiple iterations and adjustments to achieve the desired aesthetic.
  
     

