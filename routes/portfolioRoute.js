const { get } = require("mongoose");

const router = require("express").Router();
const {
  Intro,
  About,
  Education,
  Skill,
  Coursework,
  Achievement,
  Project,
  Contact,
  Experience,
} = require("../models/portfolioModel");

router.get("/get-portfolio-data", async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const education = await Education.find();
    const skill = await Skill.find();
    const achievements = await Achievement.find();
    const courseworks = await Coursework.find();
    const projects = await Project.find();
    const contacts = await Contact.find();
    const experiences = await Experience.find();

    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      education: education,
      skills: skill,
      achievements: achievements,
      courseworks: courseworks,
      projects: projects,
      contact: contacts[0],
      experiences: experiences,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
