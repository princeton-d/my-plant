import React from 'react';
import classes from './SearchWindow.module.css';

const SearchWindow = (props) => {
  return (
    <>
      <div>
        <ul>
          <li>
            {props.searchPlant.map((plant) => {
              return plant.name;
            })}
          </li>
        </ul>
      </div>
    </>
  );
};

export default SearchWindow;
