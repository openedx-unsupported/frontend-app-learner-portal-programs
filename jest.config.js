const path = require('path');
const fs = require('fs');

let envConfigPath = path.join(__dirname, 'fallback.env.config.js');
const appEnvConfigPath = path.join(__dirname, 'env.config.js');

if (fs.existsSync(appEnvConfigPath)) {
  envConfigPath = appEnvConfigPath;
}
module.exports = {
  transform: {
    '^.+\\.jsx?$': '<rootDir>/jest-preprocess.js',
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/fileTransformer.js',
    'env.config': envConfigPath,
  },
  testPathIgnorePatterns: ['node_modules', '.cache'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby|@edx/paragon|@edx/frontend-platform|@edx/frontend-component-footer-edx))'],
  globals: {
    __PATH_PREFIX__: '',
  },
  testURL: 'http://localhost',
  setupFiles: ['<rootDir>/enzyme.config.js'],
};
