import { configureStore } from '@reduxjs/toolkit';
import placesReducer from './placesSlice';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { fetchPlacesEpic } from './epics';

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer: {
    places: placesReducer,
  },
  middleware:()=> [epicMiddleware],
});

epicMiddleware.run(fetchPlacesEpic);

export default store;
