import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PlaceDetail = () => {
  const { id } = useParams();
  const place = useSelector(state =>
    state.places.places.find(p => p.id === parseInt(id))
  );

  if (!place) return <div>Loading...</div>;

  return (
    <div>
      <h1>{place.name}</h1>
      <img src={place.image} alt={place.name} />
      <p>{place.description}</p>
    </div>
  );
};

export default PlaceDetail;
