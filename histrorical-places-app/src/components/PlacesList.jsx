import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PlaceItem from './PlaceItem';
import { toggleVisited } from '../redux/placesSlice';

const PlaceList = () => {
  const places = useSelector((state) => state.places.places);
  const visitedPlaces = useSelector((state) => state.places.visitedPlaces);
  const dispatch = useDispatch();

  return (
    <div>
      {places.map((place) => (
        <PlaceItem
          key={place.id}
          place={place}
          visited={visitedPlaces.includes(place.id)}
          onToggleVisited={() => dispatch(toggleVisited(place.id))}
        />
      ))}
    </div>
  );
};

export default PlaceList;
