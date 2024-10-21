const express = require('express');
const { submitContact } = require('../controllers/contactController');
const {getAllContacts,getContactById,deleteContact}=require('../controllers/getContact')
const router = express.Router();

router.post('/submit', submitContact);
router.get('/', getAllContacts);
router.get('/:id', getContactById);
router.delete('/:id', deleteContact);

module.exports = router;