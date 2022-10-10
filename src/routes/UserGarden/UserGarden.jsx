import React, { useState } from "react";
import GardenItem from "../../components/GardenItem/GardenItem";
import classes from "./UserGarden.module.css";
import { dbService as db } from "../../service/fbase";
import { useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";

// 김수영 2022.10.7 CRUD 기능 구현
const UserGarden = (props) => {
  const [plantInfo, setPlantInfo] = useState([]);
  useEffect(() => {
    onSnapshot(collection(db, "garden"), (snapshot) => {
      const plantList = snapshot.docs.map((doc) => ({
        did: doc.id,
        ...doc.data(),
      }));
      setPlantInfo(plantList);
    });
  }, []);

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.title}>
            <p>
              {props.userInfo && props.userInfo.displayName}'s{" "}
              <span>GARDEN</span>
            </p>
          </div>
          <div className={classes.contents}>
            <ul>
              {plantInfo
                ? plantInfo
                    .filter((plant) => plant.creatorId === props.userInfo.uid)
                    .map((plant) => <GardenItem key={plant.id} plant={plant} />)
                : null}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserGarden;
