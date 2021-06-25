<h1 align="center">
  <img src="./src/assets/images/logo.jpg" width="150px"/><br/>
  <strong>Cloudversity</strong>
</h1>
<p align="center">Cloudversity is an e-learning platform. The sole purpose of making this web-app is to minimize the gap between a student and a mentor by providing them a mediator learning platform. This is a full-stack web-app where a user can register him/ herself via Email / Google Login as a Tutor or a Student. A user can search courses, apply filters i.e. free, paid, popular and more. It has lots of features inspired by Udemy platform.
</p>

<!-- <p align="center"><a href="https://github.com/create-go-app/cli/releases" target="_blank"><img src="https://img.shields.io/badge/version-v2.2.2-blue?style=for-the-badge&logo=none" alt="cli version" /></a>&nbsp;<a href="https://pkg.go.dev/github.com/create-go-app/cli/v2?tab=doc" target="_blank"><img src="https://img.shields.io/badge/Go-1.16+-00ADD8?style=for-the-badge&logo=go" alt="go version" /></a>&nbsp;<a href="https://gocover.io/github.com/create-go-app/cli/pkg/cgapp" target="_blank"><img src="https://img.shields.io/badge/Go_Cover-89%25-success?style=for-the-badge&logo=none" alt="go cover" /></a>&nbsp;<a href="https://goreportcard.com/report/github.com/create-go-app/cli" target="_blank"><img src="https://img.shields.io/badge/Go_report-A+-success?style=for-the-badge&logo=none" alt="go report" /></a>&nbsp;<img src="https://img.shields.io/badge/license-apache_2.0-red?style=for-the-badge&logo=none" alt="license" /></p> -->

## ⚡ Quick Installation

Make sure that you have [Git](https://git-scm.com/downloads) & [Node](https://nodejs.org) installed. Node LTS version 14.15.3 or above is requried. VS Code or any IDE with git bash setup.

Clone this repo or download zip

```
git clone <repo-url>
```

### Front-End

Go inside `front-end` folder in terminal

```
cd <folderName>
```

Install all the dependencies

```
npm install
```

To run app type `npm start` in terminal

### Back-End

Go inside `server` folder in terminal and install all the dependencies by performing same steps as above.

To run server type `npm run dev` in terminal

<!-- # Demo-Preview -->

## Table of Contents

- Quickstart
- Demo-preview
- Table of Contents
- Front-End
  - Stacks Used
  - Features
- Back-End
  - Stacks Used
  - Features

## Front-End

### Stacks Used

- `React` - Provides with a SPA setup using `npx create-react-app <project-name>`

- `React Hooks` - For managing state

- `Context APIs and Reducers` - For handling State Management in the app

- Packages used:

  - `react-dom` - For rendering the index.js
  - `react-router-dom` - For routing
  - `axios` - A package for calling apis
  - `node-sass` - To compile .scss files to .css
  - `firebase` - To handle real-time chat section
  - `jwt-decode` - To decode and check the authenticity of tokens
  - `react-google-login` - To provide Google SignIn / SignUp option
  - `react-responsive-carousel` - It provides carousel with lots of features like auto scrolling
  - `react-stripe-checkout` - It provides interface for making a payment

- Features:
  - User authentications using email and google
  - Search and Filter Courses
  - Tutor and Student Dashboard with Stats
  - Student's profile with add to Wishlist, add to Cart and enrolling options with payment
  - Tutor's profile with Add, Update & Delete Course options
  - Discussion section for creating chat rooms
  - Course Details page with list of videos, video player & reviews
  - Light & Dark Mode
  - LocalStorage implementation for logged users
