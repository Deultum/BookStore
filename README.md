**Documentation for Angular Book Catalog Project**

**Overview:**
The Angular Book Catalog project is a web application that allows users to view and catalog books. It provides features such as user authentication, book browsing, and book management. The application is built using Angular, a popular frontend framework, and integrates with a backend API to fetch and manage book data.

**Project Structure:**
The project follows a standard Angular application structure with the following main directories:

1. **src**: Contains the main application code and assets.
   - **app**: Contains components, services, and other Angular-related files.
   - **assets**: Contains static assets like images, stylesheets, etc.
   - **environments**: Contains environment-specific configuration files.
   - **types**: Contains TypeScript interfaces used throughout the application.

2. **app**: Contains the main application code.
   - **components**: Contains various components used in the application.
   - **services**: Contains Angular services for handling API interactions and authentication.
   - **models**: Contains TypeScript classes or interfaces for data models.
   - **guards**: Contains Angular route guards to protect certain routes based on authentication status.
   - **interceptors**: Contains Angular HTTP interceptors for adding authentication headers to API requests.
   - **utils**: Contains utility/helper functions used across the application.
   - **app.module.ts**: Main Angular module where components, services, and other modules are declared.
   - **app-routing.module.ts**: Contains application routes and route configurations with route guards.
   - **app.component.ts**: Root component of the application.
   - **app.component.html**: Root component template.

**Features:**

1. **User Authentication:**
   - The application provides user authentication using Angular's `AuthGuard`.
   - New users can sign up and existing users can log in to access protected routes.

2. **Book Catalog and Browsing:**
   - The application allows users to browse and view a catalog of books fetched from the backend API.
   - Books are displayed in a grid format, and users can click on a book to view its details.

3. **Book Details:**
   - The application provides a separate page to display detailed information about a selected book.
   - Users can view the book's title, author, cover image, and other relevant details.

4. **Book Management (Protected Routes):**
   - Authenticated users have access to additional features for book management.
   - Users can add new books to the catalog by providing book details through a form.
   - Users can edit existing books and update their details.
   - Users can delete books from the catalog.

5. **API Integration:**
   - The application communicates with a backend API to fetch book data and manage books.
   - API interactions are handled using Angular's `HttpClient` and custom service methods.

6. **Responsive Design:**
   - The application is designed to be responsive and work seamlessly on various devices and screen sizes.

**Setup and Usage:**
1. Clone the repository and navigate to the project root directory.
2. Install the required dependencies using `npm install`.
3. Set up the backend API and configure the API URL in the environment file.
4. Run the development server using `ng serve`.
   Run the softUni practice Server using `node server.js`
5. Access the application in the browser at `http://localhost:4200`.

**Note:**
This documentation provides an overview of the key features and structure of the Angular Book Catalog project. Additional details, such as API endpoints, authentication methods, and specific implementation details, may be present in the actual project files. For a complete understanding, developers are encouraged to review the source code and comments within the project files.