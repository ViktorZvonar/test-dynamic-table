# Municipal Library Infocenter

Welcome to the Municipal Library Infocenter application. This web application
provides an interactive and friendly interface for accessing books in a
fictional municipal library. Users can browse through the entire collection,
view detailed information about each book, and vote for or against it. User
voting preference is stored in the browser's localStorage, meaning users can't
vote more than once for the same book even if the page is reloaded.

## Features

- List view of all the books with rate (votes) details.
- Detailed view of each book, including a voting feature for users to express
  their opinions about the book.
- Breadcrumb navigation for improved user experience.
- Responsive design, making it accessible on various devices - desktops,
  tablets, and mobiles.

## Technology Stack

- React
- CSS Modules
- React Router for navigation
- React-Table for table formatting
- React Loader Spinner for displaying a spinner during asynchronous operations
- Axios for HTTP requests
- Notiflix for notifications
- MockAPI for mimicking backend services

## How to Run Locally

1. Clone the repository: git clone
   https://github.com/ViktorZvonar/test-dynamic-table
2. Install the dependencies: cd test-dynamic-table npm install
3. Start the application: npm start The application will start on
   http://localhost:3000/test-dynamic-table/

## Future Enhancements

- User authentication and personalized recommendations based on user activity.
- Features for librarians, like adding and managing books.

## Author

- Viktor Zvonar - [ViktorZvonar](https://github.com/ViktorZvonar)

Feel free to contribute to this project by creating issues or pull requests.
