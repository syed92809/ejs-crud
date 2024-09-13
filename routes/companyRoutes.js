const express = require('express');
router = express.Router();
const companyController = require('../controllers/companyController');


router.get('/', companyController.getAllCompanies);
router.get('/create', companyController.createCompanyForm);
router.post('/create', companyController.createCompany);
router.get('/edit/:id', companyController.editCompanyForm);
router.post('/edit/:id', companyController.updateCompany);
router.post('/delete/:id', companyController.deleteCompany);

module.exports = router;