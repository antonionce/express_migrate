import { Router } from "express";
import { createProjects, deleteProject, getProject, getProjects, updateProject } from "../controllers/projects.controller.js";

const router = Router()

router.get('/projects', getProjects)
router.post('/projects', createProjects)
router.put('/projects/:id', updateProject)
router.delete('/projects/:id', deleteProject)
router.get('/projects/:id', getProject)

export default router;