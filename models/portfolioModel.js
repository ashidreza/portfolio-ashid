const mongoose = require("mongoose");

const introSchema = new mongoose.Schema({
  welcomeText: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const educationSchema = new mongoose.Schema({
  schoolName: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  percentage: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
});

const skillSchema = new mongoose.Schema({
  skillTag: {
    type: String,
    required: true,
  },
  skillSet: {
    type: Array,
    required: true,
  },
});

const achievementSchema = new mongoose.Schema({
  achievementSet: {
    type: Array,
    required: true,
  },
});

const courseworkSchema = new mongoose.Schema({
  courseworkSet: {
    type: Array,
    required: true,
  },
});

const aboutSchema = new mongoose.Schema({
  lottieURL: {
    type: String,
    required: true,
  },
  description1: {
    type: String,
    required: true,
  },
  description2: {
    type: String,
    required: true,
  },
  skills: {
    type: Array,
    required: true,
  },
});

const experienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const projectsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  technologies: {
    type: String,
    required: true,
  },
});

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

module.exports = {
  Intro: mongoose.model("intros", introSchema),
  Education: mongoose.model("education", educationSchema),
  Skill: mongoose.model("skills", skillSchema),
  About: mongoose.model("abouts", aboutSchema),
  Coursework: mongoose.model("courseworks", courseworkSchema),
  Achievement: mongoose.model("achievements", achievementSchema),
  Experience: mongoose.model("experiences", experienceSchema),
  Project: mongoose.model("projects", projectsSchema),
  Contact: mongoose.model("contacts", contactSchema),
};
