import React from "react";
import { useLocation } from "react-router-dom";
import PlantItem from "../../components/PlantItem/PlantItem";
import classes from "./SearchResult.module.css";
import nothing from "../../image/nothing.png";

const SearchResult = (props) => {
  let userId = props.userInfo.uid;
  const location = useLocation();

  const search = location.state.search;

  console.log(search);
  console.log(userId);
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.title}>
            <span>검색결과</span>
          </div>
          {search && (
            <ul className={classes.searchResult}>
              {search.map((item) => {
                return <PlantItem plant={item} key={item.id} userId={userId} />;
              })}
            </ul>
          )}
          {search.length === 0 && (
            <div className={classes.noResult}>
              <img src={nothing} alt="검색 결과가 없습니다" />
              <span>검색 결과가 없습니다.</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchResult;
