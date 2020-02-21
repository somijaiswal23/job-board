export const add = data => ({
  type: "ADD_JOBS",
  payload: data
});
export const update = data => ({
  type: "UPDATE_JOBS",
  payload: data
});
export const deleteJob = data => ({
  type: "DELETE_JOBS",
  payload: data
});

