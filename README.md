# Angular Online Shop Backoffice Application

This is a backoffice application for managing products of an online shop. It allows employees to create, display, and delete products from the office or on the go during their work travels.

## Features

- Dashboard displaying shop name and product management functionalities.
- Ability to add, delete, and display product details including title, description, price, category, employee, and reviews.
- Changeable layout from panels to grid and vice versa.
- Chart visualization of products per category ratio using PolarArea chart.

## Installation

1. Navigate into the project directory:
cd euris-shop-admin

3. Install dependencies:
npm install

4. Start the development server:
npm start

5. Open your browser and navigate to http://localhost:4200/ to view the application.

### API Integration
The application interacts with an external API to fetch and manage product data. Ensure that the API is accessible and properly configured.

### Technologies Used
Angular
Angular Material
Tailwind CSS
Chart.js

### To Be improved
- Store the selected store id in a service or NgRx store to manage easy.
- Add validation and notification when receive some errors in the api.
- Add interception to get generic API erros and log correctly.
- Create reusable Angular components encapsulating common UI elements and functionalities, such as buttons, input fields, modals, etc.
- Use Tailwind CSS to define default styles for these components, ensuring consistent design across the application.

- Implement features like pagination, infinite scrolling, or virtual scrolling for efficient data presentation, especially for large datasets.
- Add animation and transition effects to enhance the user interface and provide visual feedback.

- Implement localization and internationalization features to support multiple languages and regions.
- Improve Testing, CI/CD, Accessibility.

### Contributing
Contributions are welcome! Please follow the contributing guidelines.

### License
This project is licensed under the MIT License - see the LICENSE file for details.