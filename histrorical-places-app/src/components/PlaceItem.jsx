import React from 'react';
import { Link } from 'react-router-dom';

const PlaceItem = ({ place, visited, onToggleVisited }) => (
  <div>
    <h2>{place.name}</h2>
    <img src={place.image} alt={place.name} />
    <p>{place.description}</p>
    <button onClick={onToggleVisited}>
      {visited ? 'Unmark as Visited' : 'Mark as Visited'}
    </button>
    <Link to={`/places/${place.id}`}>View Details</Link>
  </div>
);

export default PlaceItem;
