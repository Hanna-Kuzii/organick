# Orhanick

This project is built using Node.js and React, with MySQL as the database management system. The website is designed to be adaptive and cross-browser compatible, supporting Chrome and Firefox. The project follows the BEM methodology and utilizes SCSS for styling.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Database Setup](#database-setup)
- [Usage](#usage)
- [Our Products](#our-products)
- [Cart](#cart)
- [Order Placement](#order-placement)

## Description

[Project Name] is a web application developed using Node.js and React. It provides users with the ability to browse and order products. The project uses MySQL to store product information and order data. The website is designed to be responsive and work seamlessly across different browsers.

## Features

- Display of products with discounts prioritized.
- Modal windows for detailed product information and quantity selection.
- Real-time cart functionality with the ability to adjust quantities and remove items.
- Order placement and form validation.
- Storage of order data in the database for admin processing.

## Getting Started

### Prerequisites

- Node.js and npm (Node Package Manager)
- MySQL server
- Web browser (Chrome, Firefox)

### Installation

1. Clone the repository: `git clone [repository URL]`
2. Navigate to the project folder: `cd [project folder]`
3. Install dependencies: `npm install`

### Database Setup

1. Create a MySQL database named `[database name]`.
2. Import the provided SQL dump file (`database.sql`) to create the necessary tables.
3. Configure the database connection in `[path to config file]`.

## Usage

To start the development server, run:

```bash
npm start
```

Access the application through your browser at `http://localhost:3000`.

## Our Products

The main page displays a selection of 8 products. Products with discounts are shown first, followed by regular-priced items. Product information is stored in the database.

To load more products, click the "Load More" button to display up to 16 products. Discounted products are prioritized, and the original price is crossed out.

## Cart

When a user selects a product, they can click on it to open a modal window displaying detailed information. Users can adjust the quantity and add the product to their cart. The cart icon in the navigation panel displays the total number of items in the cart.

## Order Placement

Users can proceed to the cart to review their selected items. The cart displays product images, names, discounted prices, and the total cost. Users can modify quantities and remove items.

Upon clicking the "Place Order" button, a form opens for users to enter their information and confirm the order. Order data is stored in the database for administrative processing.

For any further assistance or inquiries, please contact [contact email].