# Culinary-AI

This project consists of a backend and a frontend that work together to provide a seamless application experience. The backend is built using Node.js and Express, while the frontend is built using React and Vite.

---

## Backend

### Technologies Used:
- **Node.js**: A JavaScript runtime for server-side development.
- **Express**: A fast, unopinionated, minimalist web framework for Node.js.
- **Nodemon**: A tool for automatically restarting the server during development.

### Setup:

1. Clone the repository or navigate to your project directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the server in development mode:
   ```bash
   npm run dev
   ```
   The server will start and automatically restart on changes using Nodemon. By default, the server will be available at `http://localhost:3000`.

### Available Scripts:
- **test**: Placeholder for testing.
- **dev**: Starts the server in development mode with Nodemon.

### Dependencies:
- `express`: Version 4.21.2
- `nodemon`: Version 3.1.9
- `@google/generative-ai`: Version 0.23.0 (Google's AI tools)

---

## Frontend

### Technologies Used:
- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast and lightweight development build tool.
- **Tailwind CSS**: A utility-first CSS framework for building custom designs.
- **Clerk**: A platform for user authentication and management.
- **Framer Motion**: A popular animation library for React.
- **React Router**: For navigation in a single-page React app.

### Setup:

1. Clone the repository or navigate to your project directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:3000`.

### Available Scripts:
- **dev**: Starts the development server using Vite.
- **build**: Compiles the TypeScript and builds the production version of the app.
- **lint**: Runs ESLint to ensure code quality.
- **preview**: Previews the production build locally.

### Dependencies:
- `@clerk/clerk-react`: Version 5.24.1
- `@radix-ui/react-slot`: Version 1.1.2
- `framer-motion`: Version 12.4.7
- `lucide-react`: Version 0.477.0
- `react-router-dom`: Version 7.2.0
- `tailwind-merge`: Version 3.0.2
- `tailwindcss`: Version 4.0.9

### Development Dependencies:
- `@types/react`: TypeScript definitions for React.
- `@vitejs/plugin-react`: Vite plugin for React.
- `eslint`: For linting JavaScript and JSX code.
- `typescript`: TypeScript language support.

---

## Development Environment

### Backend:
- Ensure that you have Node.js and npm installed.
- Run the backend server using:
  ```bash
  npm run dev
  ```

### Frontend:
- Ensure that you have Node.js and npm installed.
- Run the frontend using:
  ```bash
  npm run dev
  ```

---

## License
This project is licensed under the ISC License.
