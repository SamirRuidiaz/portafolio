import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Item } from '../Item/Item';
import styles from './Grid.module.scss';
import { getDataWork } from "../../state/actions/dataWorks";

export const Grid = () => {
  
  const { listWork } = useSelector( state => state.work );
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getDataWork());
  }, [dispatch, listWork]);

  return (
    <div className={`${styles.Grid} flex flex-wrap flex-row justify-content-around`}>
      {
        listWork.map((value, i) => (
          <Item key={i} dataItem={ value } />
        ))
      }
    </div>
  )
}