# React Assessment

Welcome to the Ubiquiti device search page for in-house staff and developers. We provide this interface for easy access to numerous products we have in stock, including product names, lines, and specifications. The interface is designed to be accessible to all staff members on various devices, ranging from wide-screen monitors and laptops to tablets and small-screen phones.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Strong Areas](#strong-areas)
- [Areas to Improve](#areas-to-improve)
- [Testing](#testing)
- [Contributing](#contributing)
- [Appreciation](#appreciation)

## Installation

To get started with this Assessment project, follow these steps:

1. Clone this repository to your local machine using the following command:
   ```
   git clone https://github.com/waiz3ple/ubiquiti.git
   ```
2. Change into the project directory:
   ```
   cd ubiquiti
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
   The application will be running at `http://localhost:3000` in your browser.

## Usage

Once the development server is running, you can begin exploring and interacting with the React Assessment project. The project includes the following features:

- A home page with a search bar and navbar to search and filter products.
- The navigation includes list view, grid view, and filter options.
- The color tone of the page is maintained as grayscale.
- Basic routing setup using React Router.

Feel free to modify and enhance the project.

## Project Structure

The structure of the project is as follows:

```
Ubiquiti/
  |- public/
  |- src/
    |- assets/
       |- fonts/
       |- images/
    |- components/
       |- DataView/
       |- FilterPanel.jsx
       |- Header.jsx
       |- IconList.jsx
       |- SearchBar.jsx
    |- pages/
       |- Home.jsx
       |- NotFound.jsx
    |- Redux/
      |- features/
       |- data/
          |- Devices.js
          |- UpdatedData.js
          |- UpdatedStableData.js
       |- filterPanel/
          |- Panel.js
       |- filters/
          |- Filter.js
       |- search/
          |- Search/
       |- Store.js
    |- Hooks.js
    |- Util.js
    |- GlobalStyle.js
    |- App.js
    |- index.js
    |- ...
  |- ...
  |- README.md
  |- ...
```

The `public` directory contains the index HTML file and any other static assets. The `src` directory contains the main application code, including components and the root `App.jsx` file.

## Strong Areas

The following are the areas that are well-handled in this project:

- **Performance**: Since the data is relatively stable, the necessary data for the page is loaded alongside the initial page load and stored. Subsequent activities such as data querying (searching) and filtering are done using the stored data. By default, images load asynchronously, making this approach most suitable. API calls have been reduced to one, and user experience is improved. Memoization could be considered in one or two places.
- **Accessibility**: The application is accessible to users with disabilities. I followed accessibility guidelines and best practices. The application is also responsive and adaptive for all screen sizes.
- **Code Organization**: The code is well-structured, Codes are broken down into components and grouped based on concerns. Functions are grouped into hooks and utilities for better reusability. Styled-components were chosen for code organization considerations.
- **UserEngagement**: The application has an appealing user interface with skeletal loaders that give users an idea of what is coming. A unique spinner derived from the company's logo is used for initial loading. The application is easy to navigate, and overall loading speed is extremely fast, even on low 3G connections.
- **Styling and Animation**: styled-components was used in this project due to its nesting feature (similar to SASS), ease of passing props, ability to coexist in the same file with JavaScript and HTML. GSAP was used for animations, making complex animations easier to understand.
- **Assets and Graphics**: All images used are SVG and have been made into reusable components. Unique images were drawn using Adobe Illustrator.
- **Error Handling**: All error messages have been improved and are presented in a user-friendly and helpful way.
- **Documentation**: Comments have been added to explain the purpose of each function and complex blocks of code.

## Areas to Improve

The following areas need improvement in this project:

- **Font Import**: Unfortunately, I couldn't import font using ES6 import here I have to settle with commonJS require method.
- **Design**: The navigation while on the mobile phase needs a general redesign. I plan to make it collapsible with the name of each nav icon shows up on full expansion and icon on semi expansion.
- **Testing**: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx,

## Testing

The test environment has been well configured, to continue with the test:

1. To run and watch all tests:
   ```
   npm run test
   ```
2. To Check Test Coverage report
   ```
   npm run coverage
   ```
3. To ReFormat all changes
   ```
   npm run format
   ```

## Contributing

Your suggestions are welcome, I will like to learn more.

---

## Appreciation

I wanted to express my sincere appreciation for the opportunity given to me to work on this project assessment. It was an enriching experience, and I wanted to take a moment to thank you for considering me as a candidate for the position.

Throughout the assessment process, I had the chance to showcase my skills and demonstrate my capabilities. The project challenged me to think critically, apply my knowledge, and conduct effective research. One of the most challenging aspects for me was nesting the table, as I had never had the chance to do that before. I truly enjoyed working on the entire project, and it was a great opportunity for personal and professional growth.

I want to assure you that I approached this project assessment with utmost dedication, and I am confident that the work I submitted accurately reflects my abilities and commitment to delivering high-quality results. I am genuinely excited about the possibility of joining your team and contributing to Ubiquiti's success.

Once again, I want to thank you for considering me for this opportunity. I truly appreciate the chance to showcase my skills and be part of the assessment process. I look forward to hearing from you regarding the next steps in the hiring process.

If there are any additional details or information you require, please do not hesitate to reach out to me. Thank you once again for your time and consideration.

Thanks!
