const mongoose = require('mongoose');

const personalInfoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  linkedin: {
    type: String,
    required: true
  },
  github: {
    type: String,
    required: true
  },
  profileImage: {
    type: String,
    required: true
  },
  about: {
    type: String,
    required: true
  }
});

const skillsSchema = new mongoose.Schema({
  technical: [{
    name: String,
    level: Number,
    category: String
  }],
  soft: [{
    name: String,
    icon: String
  }]
});

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  longDescription: {
    type: String,
    required: true
  },
  technologies: [String],
  link: String,
  github: String,
  image: String,
  featured: {
    type: Boolean,
    default: false
  }
});

const achievementSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  award: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  icon: String
});

const educationSchema = new mongoose.Schema({
  institution: {
    type: String,
    required: true
  },
  degree: {
    type: String,
    required: true
  },
  field: {
    type: String,
    required: true
  },
  grade: String,
  period: {
    type: String,
    required: true
  },
  current: {
    type: Boolean,
    default: false
  }
});

const experienceSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  achievements: [String],
  period: {
    type: String,
    required: true
  }
});

// Models
const PersonalInfo = mongoose.model('PersonalInfo', personalInfoSchema);
const Skills = mongoose.model('Skills', skillsSchema);
const Project = mongoose.model('Project', projectSchema);
const Achievement = mongoose.model('Achievement', achievementSchema);
const Education = mongoose.model('Education', educationSchema);
const Experience = mongoose.model('Experience', experienceSchema);

module.exports = {
  PersonalInfo,
  Skills,
  Project,
  Achievement,
  Education,
  Experience
};