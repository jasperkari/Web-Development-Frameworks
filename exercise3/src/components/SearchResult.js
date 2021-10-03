import React from 'react';
import styles from './SearchResult.module.css';

export default function SearchResult(props) {
  return (
    <div className={ styles.product }>
        <div>
          <div className={styles.image}><img src={`/images/${props.image}`} /></div>
          <div className={styles.name}>{ props.name }</div>
          <div>{props.author}</div>
          <div style = {{fontSize: "20px"}}>${props.price}</div>
          <div className={styles.rating}>
            <div>{props.rating}</div>
            <div className={styles.number}>{props.ratingNumber}</div>
          </div>
        </div>
    </div>
  )
}
