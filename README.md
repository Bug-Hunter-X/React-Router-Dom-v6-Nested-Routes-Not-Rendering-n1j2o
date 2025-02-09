# React Router Dom v6 Nested Routes Issue

This repository demonstrates a common issue encountered when working with nested routes in React Router Dom v6. The parent route renders correctly, but the nested child routes fail to render. This example showcases the problem and provides a solution.

## Problem

The provided `App.js` file contains a basic React Router setup with nested routes.  Notice that while the main routes render, any nested routes under them do not.

## Solution

The `AppSolution.js` file provides a corrected implementation. The solution addresses how nested routes are handled within the application structure. The solution utilizes the `useParams` hook effectively.