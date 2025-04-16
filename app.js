const express = require('express');
const mongoose = require('mongoose');
const dbConnect = require('./config/db');
require('dotenv').config();

// Import routing
const personRoutes = require('./routes/personRoutes');
const companyRoutes = require('./routes/companyRoutes');
const bookRoutes = require('./routes/bookRoutes');
const carRoutes = require('./routes/carRoutes');

const app = express();

// Middleware
app.use(express.json());

// Koneksi ke database
dbConnect();

// Routing
app.use('/api/v1/persons', personRoutes);
app.use('/api/v1/companies', companyRoutes);
app.use('/api/v1/books', bookRoutes);
app.use('/api/v1/cars', carRoutes);

module.exports = app;
