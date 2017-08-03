// @flow

const environment: Environment = {
  DEFAULT_PORT: 5000,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost/mydb'
};

export default environment;
