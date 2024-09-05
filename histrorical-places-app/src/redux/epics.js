import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { setPlaces } from './placesSlice';

const FETCH_PLACES = 'places/fetchPlaces';

export const fetchPlacesEpic = action$ =>
  action$.pipe(
    ofType(FETCH_PLACES),
    mergeMap(() =>
      ajax.getJSON('/api/places').pipe(
        map(response => setPlaces(response))
      )
    )
  );

export const fetchPlaces = () => ({ type: FETCH_PLACES });
