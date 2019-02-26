import { createReducer } from './createReducer';
import { Store, FilterTypes } from '../store';
import { combineReducers } from 'redux';

export const reducer = combineReducers<Store>({
  todos: createReducer<Store['todos']>(
    {},
    {
      add(draft, action) {
        draft[action.id] = { label: action.label, completed: false };
        return draft;
      },

      remove(draft, action) {
        delete draft[action.id];
        return draft;
      },

      complete(draft, action) {
        draft[action.id].completed = !draft[action.id].completed;
        return draft;
      },

      clear(draft) {
        Object.keys(draft).forEach(id => {
          if (draft[id].completed) {
            delete draft[id];
          }
        });
        return draft;
      },

      edit(draft, action) {
        draft[action.id].label = action.label;
        return draft;
      }
    }
  ),
  filter: createReducer<Store['filter'], 'setFilter'>('all', (draft, action) => {
    return action.filter as FilterTypes;
  })
});
