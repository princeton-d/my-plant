import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
  const styles = `${classes.button} ${props.className}`;

  return (
    <button className={styles} onClick={props.onClick}>{props.children}</button>
  )
};

export default Button;