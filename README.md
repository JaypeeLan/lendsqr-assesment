# Lendsqr Assessment Project

This project, named "lendsqr-assesment", is a frontend engineering assessment built with React, TypeScript, SCSS, and SWR for data fetching. It uses Next.js as the framework and Jest for testing. The project also uses classnames for conditional class management in components.

## Table of Contents

- Installation
- Running the Project
- Testing
- Building for Production
- Linting

### Installation

To get started with this project, you need to have Node.js and npm installed on your machine. If you don't have Node.js installed, you can download it from Nodejs.org. After installing Node.js, you can verify the installation by running the following commands in your terminal:

node -v
npm -v

These commands should display the installed versions of Node.js and npm respectively.

Once you have Node.js and npm installed, clone the project repository from GitHub:

git clone https://github.com/JaypeeLan/lendsqr-assesment.git

Navigate into the project directory:

cd lendsqr-assesment

Install the project dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

This command will install all the dependencies listed in the package.json file.

### Running the Project

To run the project in development mode, use the following command:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

This command starts the Next.js development server. You can view the application by opening [http://localhost:3000](http://localhost:3000) in your browser. The page will reload if you make edits, and you will also see any lint errors in the console

### Testing

This project uses Jest for testing. To run the tests, use the following command:

```bash
npm run test
```

This command runs all the tests defined in the project using Jest.

### Building for Production

To create a production build of the project, use the following command:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

This command builds the application for production usage. It optimizes the build for the best performance and the files generated will be minified and the filenames will include hashes for cache management

After building the project, you can start the application in production mode using:

```bash
npm run start
# or
yarn start
# or
pnpm start
# or
bun start
```

### Linting

This project uses Next.js's built-in ESLint for linting. To run the linter, use the following command:

```bash
npm run link
# or
yarn link
# or
pnpm link
# or
bun link
```

This command will run the linter and report any linting errors in the console.

### Conclusion

This README provides a guide on how to install, run, test, build for production, and lint the "lendsqr-assesment" project.
