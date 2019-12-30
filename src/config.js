import 'dotenv/config';

const config = {};

config.DB = process.env.DB;
config.PORT = process.env.PORT || 5000;

export default config;
