import { createSlice } from "@reduxjs/toolkit";

const taskListSlice = createSlice({
  name: "task",
  initialState: {
    taskList: [],
    activeCard: null,
  },
  reducers: {
    addTask: (state, action) => {
      state.taskList.push(action.payload);
      window.localStorage.setItem("taskList", JSON.stringify(state.taskList));
    },
    updateTaskList: (state, action) => {
      state.taskList = [...action.payload];
      window.localStorage.setItem("taskList", JSON.stringify(state.taskList));
    },
    deleteTask: (state, action) => {
      state.taskList = state.taskList.filter(
        (task) => task.id !== action.payload
      );
      window.localStorage.setItem("taskList", JSON.stringify(state.taskList));
    },
    selectTag: (state, action) => {
      console.log(action.payload);
    },
    updateActiveCard: (state, action) => {
      state.activeCard = action.payload;
      console.log(state.activeCard);
    },
    onDropCard: (state, action) => {
      const { status, id } = action.payload;
      if (state.activeCard === null || state.activeCard === undefined) return;
      const activeTaskIndex = state.taskList.findIndex(
        (object) => object.id === state.activeCard
      );
      let activeTask;
      if (activeTaskIndex !== -1) {
        activeTask = state.taskList.slice(
          activeTaskIndex,
          activeTaskIndex + 1
        )[0];
        state.taskList = state.taskList.filter(
          (task) => task.id !== activeTask.id
        );
      }
      const pos =
        id !== 0 ? state.taskList.findIndex((obj) => obj.id === id) : 0;
        if(pos!==0)
      state.taskList.splice(pos+1, 0, {
        ...activeTask,
        status: status,
      });
      else
      state.taskList.splice(0, 0, {
        ...activeTask,
        status: status,
      });

      window.localStorage.setItem("taskList", JSON.stringify(state.taskList));
    },
  },
});

export const {
  addTask,
  updateTaskList,
  deleteTask,
  selectTag,
  updateActiveCard,
  onDropCard,
} = taskListSlice.actions;

export default taskListSlice.reducer;
