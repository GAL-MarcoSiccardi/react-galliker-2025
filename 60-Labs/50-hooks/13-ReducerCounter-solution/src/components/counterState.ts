export type CounterState = { count: number };
type CounterActionType = 'increment' | 'decrement' | 'reset';
export type CounterAction = { type: CounterActionType };

export function counterReducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return {count: state.count + 1};
    case "decrement":
      return {count: state.count - 1};
    case "reset":
      return {count: 0};
    default:
      throw new Error();
  }
}

export function createInitialCounterState(): CounterState {
  return {count: 0};
}