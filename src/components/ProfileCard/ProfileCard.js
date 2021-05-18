import React, { useState } from "react";
import "./ProfileCard.scss";
import coverImgSrc from "../../assets/cover.png";
import profileImgSrc from "../../assets/profile.png";

function ProfileCard(props) {
  const { profileTechs } = props;
  const [followStatus, setfollowStatus] = useState(false);

  const handleFollowBtnClick = () => {
    setfollowStatus(!followStatus);
  };

  const displayTechs = () => {
    return profileTechs.map((tech) => {
      return (
        <a href="/" key={tech.id}>
          {tech.name}
        </a>
      );
    });
  };

  return (
    <div className="profileCardContainer">
      <img
        className="coverImg"
        src={coverImgSrc}
        alt="Cover"
        height="250"
        width="680"
      />
      <div className="profileInfoContainer">
        <img
          className="profileImg"
          src={profileImgSrc}
          alt="Profile"
          height="80"
          width="80"
        />
        <button
          className={followStatus ? "followingBtn" : "followBtn"}
          onClick={handleFollowBtnClick}
        >
          {followStatus ? "Following" : "Follow"}
        </button>
        <div className="textContainer">
          <h1>Bounteous</h1>
          <p>Content, Commerce, and Coffee - {displayTechs()}</p>
          <p className="footerText">
            North America & Europe • bounteous.com • Joined March 2009
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
