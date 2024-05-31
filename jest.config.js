module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "^@/components(.*)$": "<rootDir>/components$1",
    "^@/hooks(.*)$": "<rootDir>/hooks$1",
    "^@/app(.*)$": "<rootDir>/app$1",
    "^@/types(.*)$": "<rootDir>/types$1",
    "^next/navigation$": "<rootDir>/__mocks__/next/navigation.js",
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
