module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mocks CSS imports\
  },
  setupFilesAfterEnv: ['./src/test/setup/setupTests.ts'], // Path to your setupTests file
};
