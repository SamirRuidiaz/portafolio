import { types } from '../types/types';
import { data } from '../../data/data';

export const workAction = (data) => ({
  type: types.works,
  payload: data
});

export const getDataWork = () => {
  return (dispatch) => {
    dispatch( workAction(data) );
  }
}