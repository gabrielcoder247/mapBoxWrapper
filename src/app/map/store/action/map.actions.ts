import { createAction, props } from '@ngrx/store';
import {Mapwrapper} from '../../../models/mapwrapper';

export const addMaps = createAction(
  '[Map] Add Maps',
  (map: Mapwrapper) => ({map})
);




