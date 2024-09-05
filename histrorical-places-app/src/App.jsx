import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchPlaces } from './redux/epics';
import PlaceDetail from './components/PlacesDetail';
// import PlaceList from './components/PlaceList';
import Home from './pages/Home'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlaces());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places/:id" element={<PlaceDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
