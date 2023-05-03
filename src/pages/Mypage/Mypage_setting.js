import React, { useState } from "react";
import "./Mypage.css";
import profileimg from "../../assets/images/profile_sample1.png";
import alarm from "../../assets/images/alarm.png";

export default function Mypage_setting() {
  const [previewImg, setPreviewImg] = useState(null);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    const previewImageUrl = URL.createObjectURL(selectedFile);
    setPreviewImg(previewImageUrl);
  };

  return (
    <div className="Mypage_setting">
      <div className="setting_container1">
        <div className="profile_img">
          {previewImg ? (
            <img src={previewImg} alt="" style={{ width: "11rem", height: "11rem", borderRadius: "50%" }} />
          ) : (
            <img src={profileimg} alt="" style={{ width: "11rem", height: "11rem", borderRadius: "50%" }} />
          )}
        </div>

        <button className="change_photo_button" onClick={() => document.getElementById("profileImg").click()}>
          Change Photo
        </button>
        <input onChange={handleImageChange} className="change_photo_button_input" type="file" accept="image/*" id="profileImg" />
      </div>

      <div className="setting_container2">
        <div className="setting_buttons">
          <button className="back_button">Back</button>
          <button className="save_changes_button">Save Changes</button>
        </div>

        <div className="your_profile">
          <div className="your_profile_item">
            <div className="your_profile_title">Your name</div>
            <input type="text" className="your_profile_name" />
          </div>
          <div className="your_profile_item">
            <div className="your_profile_title">Your nickname</div>
            <input type="text" className="your_profile_nickname" />
          </div>
          <div className="your_profile_item">
            <div className="your_profile_title">Your email</div>
            <input type="email" className="your_profile_email" />
          </div>
          <div className="your_profile_item">
            <div className="your_profile_title">Change password</div>
            <input type="password" className="your_profile_password" />
          </div>
        </div>

        <div className="alarm_setting">
          <div className="alarm_icon">
            <img src={alarm} alt="" />
          </div>
          <div className="alarm_option">Enable Notification</div>
        </div>

        <div className="logout_button_container">
          <button className="logout_button">LOGOUT</button>{" "}
        </div>
      </div>
    </div>
  );
}