const express = require('express');
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const PORT = process.env.PORT || 8000;
require('dotenv').config();

let db,
  dbConnectionString = process.env.DB_STRING,
  dbName = 'sample_mflix',
  collection;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});