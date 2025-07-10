import Project from '../models/project.model.js';

export const createProject = async (req, res) => {
  try {
    const { name, description } = req.body;
    const image = req.file?.filename || '';

    const newProject = await Project.create({ name, description, image });
    res.status(201).json(newProject);
  } catch (error) {
    console.error('❌ Error creating project:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};


export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};