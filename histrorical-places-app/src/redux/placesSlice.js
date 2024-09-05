import { createSlice } from '@reduxjs/toolkit';

const placesSlice = createSlice({
  name: 'places',
  initialState: {
    places: [],
    visitedPlaces: [],
  },
  reducers: {
    setPlaces: (state, action) => {
      state.places = action.payload;
    },
    toggleVisited: (state, action) => {
      const placeId = action.payload;
      if (state.visitedPlaces.includes(placeId)) {
        state.visitedPlaces = state.visitedPlaces.filter(id => id !== placeId);
      } else {
        state.visitedPlaces.push(placeId);
      }
    },
  },
});

export const { setPlaces, toggleVisited } = placesSlice.actions;
export default placesSlice.reducer;
