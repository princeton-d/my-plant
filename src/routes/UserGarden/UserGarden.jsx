import React, { useState } from "react";
import GardenItem from "../../components/GardenItem/GardenItem";
import classes from "./UserGarden.module.css";
import { dbService as db } from "../../service/fbase";
import { useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import gardening from '../../image/gardening.png';

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
  const userPlantInfo = plantInfo.filter(
    (item) => item.creatorId === props.userInfo.uid
  );
  console.log(userPlantInfo);
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
            {userPlantInfo.length !== 0 ? (
              <ul>
                {plantInfo
                  .filter((item) => item.creatorId === props.userInfo.uid)
                  .map((item) => (
                    <GardenItem key={item.plant.id} item={item} />
                  ))}
              </ul>
            ) : (
              <div className={classes.noPlant}>
                <img src={gardening} alt="정원" />
                <span>아직 식물이 없습니다.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserGarden;
