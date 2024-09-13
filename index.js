const express = require('express');
const axios = require('axios'); 
const app = express();
const prisma = require('@prisma/client').PrismaClient;
const userRoute = require('./routes/userRoutes');
const companyRoute = require('./routes/companyRoutes');

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));

// Use the routes
app.use('/users',userRoute);
app.use('/companies', companyRoute);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
