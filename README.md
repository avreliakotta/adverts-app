# Car Rental App

Welcome to the Car Rental App! This application is built with React and utilizes
a mockapi backend for server simulation. Below, you'll find a brief guide on how
to run, deploy, and use the application.

## Table of Contents

- [Routing](#routing)
- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)
- [API](#api)
- [Redux State](#redux-state)

## Routing

The app uses React Router for navigation. The available routes are:

- **Home Page (/)**

  - On the homepage, you'll find a welcome message and basic information about
    the application.

- **Catalog Page (/catalog)**

  - The catalog page displays a list of available rental cars. Here, you can
    browse and view details about the cars.You can open modal window, by
    pressing the "Learn more" button, to view the detailed information.Then you
    can rent a car by simply pressing "Rental car" in this modal window. You are
    also able to choose favourite cars, by pressing the heart(which will
    immediately turn red)

- **Favorite Page (/favorites)**
  - This page shows your favorite cars. You can add and remove cars from your
    favorites list.

## Getting Started

To get started with the app, follow these steps:

1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Run the app with `npm start`.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: An official, opinionated, batteries-included toolset for
  efficient Redux development.
- **React Router Dom**: DOM bindings for React Router, enabling navigation in a
  React application.
- **Axios**: A promise-based HTTP client for making API requests.

## API

We use [mockapi.io](https://www.mockapi.io/) to simulate the server. Please
refer to their [documentation](https://mockapi.io/docs) for additional
information.

## Redux State

The Redux store manages the application's state.



