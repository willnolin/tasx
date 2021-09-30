import api from './api'

// export const getProjectTasks = async (id) => {
//   const res = api.get(`/tasks/${id}`);
//   console.log(res)
//   return res;
// }

export const postSubTask = async (taskData) => {
  const task = api.post('/sub_tasks', { sub_task: taskData });
  return task;
}

export const putSubTask = async (id, taskData) => {
  const updated = api.put(`/sub_tasks/${id}`, {sub_task: taskData});
  return updated;
}

export const deleteSubTask = async (id) => {
  const res = await api.delete(`/tasks/${id}`)
  return res;
}