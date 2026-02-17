const express = require('express');
const router = express.Router();
const { 
  getAllData,
  getPersonalInfo,
  getSkills,
  getProjects,
  getAchievements,
  getEducation,
  getExperience
} = require('../controllers/portfolioController');

// Get all portfolio data
router.get('/', getAllData);

// Get personal info
router.get('/personal-info', getPersonalInfo);

// Get skills
router.get('/skills', getSkills);

// Get projects
router.get('/projects', getProjects);

// Get achievements
router.get('/achievements', getAchievements);

// Get education
router.get('/education', getEducation);

// Get experience
router.get('/experience', getExperience);

module.exports = router;