import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../utils/actions";

const app_reducer = (state, action) => {
  if (action.type === OPEN_SIDEBAR) {
    return { ...state, sidebarOpen: true };
  }
  if (action.type === CLOSE_SIDEBAR) {
    return { ...state, sidebarOpen: false };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default app_reducer;
