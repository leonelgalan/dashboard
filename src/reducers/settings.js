import { CHANGE_FILTER } from '../actions';

import { DEFAULT_FILTERS } from '../filter';

export default function settings(state = DEFAULT_FILTERS, action) {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_FILTER:
      return { ...state, ...payload };
    default:
      return state;
  }
}
