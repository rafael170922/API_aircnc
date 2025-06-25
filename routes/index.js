const express = require('express');
const SessionRoutes = require('./Session.routes');
const spotsRoutes = require('./Spots.routes');
const dashboardRoutes = require('./Dashboard.routes');

const router = express.Router();

router.use('/session', SessionRoutes);