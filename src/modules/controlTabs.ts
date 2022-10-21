export interface stepChange {
  step: number;
  tab: number;
}
export interface tabChange {
  tab: number;
}

export type UpdateEvent =
  | { type: "TAB_CHANGE"; data: tabChange }
  | { type: "STEP_CHANGE"; data: stepChange };

const initial = {
  activeTab: 0,
  activeStep: 0,
};

export default (state = initial, event: UpdateEvent) => {
  switch (event.type) {
    case "TAB_CHANGE":
      return {
        ...state,
        activeTab: event.data.tab,
      };
    case "STEP_CHANGE":
      return {
        ...state,
        activeStep: event.data.step,
        activeTab: event.data.tab,
      };
    default:
      return state;
  }
};
