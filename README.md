<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#github-repo-search-engine">GitHub Repo Search Engine </a>
      <ul>
        <li><a href="#where-to-find-it">Where to Find it</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>    
    <li>
      <a href="#ui-desktop">Desktop Screens</a>
    </li>
    <li>
      <a href="#ui-mobile">Mobile Screens</a>
    </li>   
    <li><a href="#features">Technology Used</a>
     <ul>
      <li><a href="#react">React</a>
      </li>
      <li><a href="#scss">SCSS</a>
      </li>
      <li><a href="#react-testing-library">React Testing Library</a>
      </li>      
     </ul>
   </li>
  </ol>
</details>


# GitHub Repo Search Engine 

GitHub Repo Search Engine is a User Interface that displays repositories of all the owners in GitHub. This UI offers a search bar where search can be done by providing the Github repository name in the box and internally calls GitHub API to retrieve a list of repos. 
 

## Where to Find it: 

Visit the below URL to access the UI and check for a list of repositories.  

```bash
URL: https://socialflicker.com/
```

## UI Desktop
#### Light Theme:
![Light Theme](https://github.com/samirbhargava01/react-github-search/blob/master/src/resources/desktop-screen.PNG)
#### Dark Mode:
![Dark Theme](https://github.com/samirbhargava01/react-github-search/blob/master/src/resources/desktop-screen-dark.PNG)

## UI Mobile
#### Light Theme:
![Light Theme](https://github.com/samirbhargava01/react-github-search/blob/master/src/resources/mobile-screen.PNG)
#### Dark Mode:
![Dark Theme](https://github.com/samirbhargava01/react-github-search/blob/master/src/resources/mobile-screen-dark.PNG)

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Then, Start it 
   ```sh
   npm start
   ```  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.  
The page will reload if you make edits.  
You will also see any lint errors in the console.

### For Test the project
  ```sh
  `npm test`
  ```
Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### For Build the Project
  ```sh
  `npm run build`
  ```
Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.  
The build is minified, and the filenames include the hashes.  
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Features:

1. GitHub Repo Search Engine UI is a React-based application and offers a dark mode for the users. It is purely based on SCSS and designed the theme density with required variables. 
2. This application uses GitHub API by leveraging the **Query** type to pull required data fields like Repository Name & its link, and GitHub user name & it's link.

## React 
This application is developed from the react framework, implementing v16.13. 
Multi theme mode is developed leveraging *styled-components* package and react-hooks. *node-sass* package was used to style the components in scss. 

## SCSS
### Separate Colour Variables

```css
$blue-color: #4379FF;
```

### One Theme File for Light & Dark theme
#### For Common Global Colour:
```scss
--gb-sm-blue-color: #{$blue-color};
```
#### For Theming Colour
```scss
--gb-bg-color: #{$dark-color};
```
## React Testing Library
The React Testing Library is a very light-weight solution for testing React components. It provides light utility functions on top of react-dom and react-dom/test-utils, in a way that encourages better testing practices. Its primary guiding principle is:
```
The more your tests resemble the way your software is used, the more confidence they can give you.
```
