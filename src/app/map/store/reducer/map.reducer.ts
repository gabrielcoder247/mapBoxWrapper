import { Action, createReducer, on } from '@ngrx/store';
import * as MapActions from '../action/map.actions';
import {Mapwrapper} from '../../../models/mapwrapper';


export const mapFeatureKey = 'map';

export interface State {
  map: Mapwrapper[];

}

export const initialState: State = {
  map: []

};

export const mapReducer = createReducer(
  initialState,
  on(MapActions.showMaps,
    (state: State, {map}) =>
      ({...state,
        map: [...state.map, map]
      }))


);


export function reducer(state: State | undefined, action: Action): any {
  return mapReducer(state, action);
}