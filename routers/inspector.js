const express = require('express');

const router = express.Router();

const inspectorController = require('../controllers/InspectorController');

router
  .get('/', inspectorController.getInspectors);

module.exports = router;
