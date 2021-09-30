import api from './api'

export const getCurrentUserProjects = async () => {
  const res = api.get("/user_projects");
  return res;
}
export const getOneProject = async (id) => {
  const res = api.get(`/projects/${id}`)
  return res;
} 
export const postProject = async (projectData) => {
  console.log(projectData)
  const project = api.post('/projects', { project: projectData });
  return project;
}

export const putProject = async (id, projectData) => {
  const updated = api.put(`/projects/${id}`, {project: projectData});
  return updated;
}

export const deleteProject = async (id) => {
  const res = await api.delete(`/projects/${id}`)
  return res;
}