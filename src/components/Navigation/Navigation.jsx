import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../../service/fbase";
import Button from "../UI/Button/Button";
import classes from "./Navigation.module.css";
import logo from "../../image/logo.png";
import { useState } from "react";
import plantInfo from "../../data/plantInfo.json";
import PlantItem from "../PlantItem/PlantItem";

// 김동현 2022.10.06 navigation 작업
const Navigation = (props) => {
  const navigate = useNavigate();
  const [menuActive, setMenuActive] = useState(false);
  const [search, setSearch] = useState("");

  const handlePlantRecommendationButton = () => {
    toggleMenu();
    props.setPlantRecommendation(true); // 식물추천 navigation 으로 변경
    navigate("/my-plant/recommendation"); // 식물추천 page 로 이동
  };
  // 김동현 2022.10.06 - 로그아웃 기능
  const handleLogoutButton = () => {
    toggleMenu();
    signOut(authService);
    props.setIsLogin(false);
    navigate("/my-plant");
  };
  // 김수영 2022.10.12 - 경로 이동 수정
  const goToPlantPick = () => {
    navigate("/my-plant");
  }
  const goToUserGarden = () => {
    navigate("/my-plant/garden");
  }
  // 김수영 2022.10.08 - 반응형 메뉴바 보이기 기능
  const toggleMenu = () => setMenuActive((prev) => !prev);
  const gnbClasses = !menuActive
    ? `${classes.gnbArea}`
    : `${classes.gnbArea} ${classes.gnbActive}`;
  // 김동현 2022.10.09 - 검색기능
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  // 김수영 2022.10.10 = 토글 메뉴 기능 추가
  const onCloseMenu = () => toggleMenu();
  const closeGnbClasses = !menuActive
    ? `${classes.gnbBottom} ${classes.closeGnb}`
    : `${classes.gnbBottom}`;

  // 김동현 2022.10.11 - 검색 기능
  const searchPlant = plantInfo.plant.filter((plant) => {
    return plant.name.join().includes(search.replace(/ /g, ""));
  });

  console.log(searchPlant);
  return (
    <>
      {/* wrapper area */}
      <div className={classes.wrapper}>
        <div className={classes.container}>
          {/* logo */}
          <div className={classes.logoArea}>
            <img className={classes.logo} src={logo} alt="logo" />
          </div>
          <button className={classes.gnbBtn} onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </button>
          <nav className={gnbClasses}>
            <div className={closeGnbClasses} onClick={onCloseMenu} />
            <div className={classes.gnbTop}>
              {/* user info */}
              <div className={classes.userInfoArea}>
                <p>환영합니다.</p>
                <h2>{props.userInfo.displayName} 님</h2>
              </div>
              {/* search */}
              <div className={classes.searchPlantArea}>
                <form className={classes.searchPlantForm}>
                  <input
                    type="search"
                    placeholder="식물 이름"
                    value={search}
                    onChange={onChange}
                  />
                  <input type="submit" value="☌" />
                </form>
              </div>
              {/* <div>
                {searchPlant.map((plant) => {
                  return <PlantItem plant={plant} />;
                })}
              </div> */}
              {/* menu */}
              <div className={classes.menuArea}>
                <Button className={classes.yellow} onClick={goToPlantPick}>
                  <i className="fa-solid fa-seedling"></i>
                  <span>오늘의 식물</span>
                  <span>PICK</span>{" "}
                </Button>
                <Button className={classes.yellow} onClick={goToUserGarden}>
                  <i className="fa-solid fa-tree"></i>
                  <span>정원</span>
                  <span>관리하기</span>{" "}
                </Button>
                <Button
                  className={classes.blue}
                  onClick={handlePlantRecommendationButton}
                >
                  <i className="fa-regular fa-square-check"></i>
                  <span>식물</span>
                  <span>추천받기</span>{" "}
                </Button>
              </div>
              {/* logout */}
              <div className={classes.logoutArea}>
                <button onClick={handleLogoutButton}>로그아웃</button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;
