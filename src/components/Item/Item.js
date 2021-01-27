import React from 'react';
import PropTypes from 'prop-types';
import styles from './Item.module.scss';

export const Item = ({dataItem}) => {
  return (
    <div className={`text-center ${styles.Item}`}>
      <img src={dataItem.img} alt={dataItem.name}></img>
      <a href={dataItem.url} target="_blank" rel="noreferrer">
        <h2 className={styles.workTitle}>
          {dataItem.name}
          <p className={styles.workDescription}> {dataItem.descrip} </p>
        </h2>
      </a>
    </div>
  )
};

Item.propTypes = {
  dataItem: PropTypes.object.isRequired
};

// Item.defaultProps = {};
