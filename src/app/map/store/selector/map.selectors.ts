import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMap from '../reducer/map.reducer';

export const selectMapState = createFeatureSelector<fromMap.State>(
    fromMap.mapFeatureKey,
  );


  export const selectMaps = createSelector(
    selectMapState,
    (state: fromMap.State) => state.map
  );
