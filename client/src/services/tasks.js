import api from './api'

export const getProjectTasks = async (id) => {
  const res = api.get(`/tasks/${id}`);
  console.log(res)
  return res;
}

export const postTask = async (taskData) => {
  const task = api.post('/tasks', { task: taskData });
  return task;
}

export const putTask = async (id, taskData) => {
  const updated = api.put(`/tasks/${id}`, {task: taskData});
  return updated;
}

export const deleteTask = async (id) => {
  const res = await api.delete(`/tasks/${id}`)
  return res;
}