const { 
  PersonalInfo,
  Skills,
  Project,
  Achievement,
  Education,
  Experience
} = require('../models/Portfolio');

// Get all portfolio data
const getAllData = async (req, res) => {
  try {
    const personalInfo = await PersonalInfo.findOne();
    const skills = await Skills.findOne();
    const projects = await Project.find();
    const achievements = await Achievement.find();
    const education = await Education.find();
    const experience = await Experience.find();

    res.json({
      personalInfo,
      skills,
      projects,
      achievements,
      education,
      experience
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get personal info
const getPersonalInfo = async (req, res) => {
  try {
    const personalInfo = await PersonalInfo.findOne();
    res.json(personalInfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get skills
const getSkills = async (req, res) => {
  try {
    const skills = await Skills.findOne();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get projects
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get achievements
const getAchievements = async (req, res) => {
  try {
    const achievements = await Achievement.find();
    res.json(achievements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get education
const getEducation = async (req, res) => {
  try {
    const education = await Education.find();
    res.json(education);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get experience
const getExperience = async (req, res) => {
  try {
    const experience = await Experience.find();
    res.json(experience);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllData,
  getPersonalInfo,
  getSkills,
  getProjects,
  getAchievements,
  getEducation,
  getExperience
};