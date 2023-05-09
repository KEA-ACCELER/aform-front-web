import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Mypage.css";
import profileimg from "../../assets/images/profile_sample1.png";
import edit_icon from "../../assets/images/edit_icon 1.png";
import FadeIn from "react-fade-in/lib/FadeIn";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

export default function Mypage() {
  const navigate = useNavigate();
  const handleSettingClick = () => {
    navigate("/mypage_setting");
  };
  const { userToken, isLogin } = useContext(AuthenticationContext);

  const CheckLogin = () => {
    if (isLogin == false) {
      alert("로그인이 필요한 서비스 입니다.");
      navigate(-1);
    }
  };
  useEffect(() => {
    CheckLogin();
  }, []);
  const surveyList_written = [
    {
      title: "Favorite Fruit",
      date: "2022-05-01",
      status: "진행중",
    },
    {
      title: "야식 선호도 설문조사",
      date: "2022-04-29",
      status: "마감",
    },
    {
      title: "좋아하는 테크 유튜버",
      date: "2022-04-27",
      status: "진행중",
    },
  ];

  const surveyList_writing = [
    {
      title: "좋아하는 아이돌",
      date: "2022-05-01",
      status: "진행중",
    },
    {
      title: "한마음 페스티벌 설문조사",
      date: "2022-04-19",
      status: "진행중",
    },
    {
      title: "넷플릭스 서비스 만족도 설문조사",
      date: "2022-04-20",
      status: "진행중",
    },
  ];

  return (
    <FadeIn className="Mypage">
      <div className="main">
        <div className="profile">
          <div className="profile_box">
            <div className="profile_img">
              <img src={profileimg} alt="" />
            </div>

            <div className="nameline">
              <div className="profile_name">Minsik Choi</div>
              <div className="edit">
                <button className="edit_button" onClick={handleSettingClick}>
                  <img src={edit_icon} alt="" />
                </button>
              </div>
            </div>

            <div className="line"></div>

            <div className="profile_email">minsikchoi@gachon.ac.kr</div>

            <div className="profile_post">
              <div className="post">작성 설문수</div>
              <div className="post_num">21</div>
            </div>

            <div className="profile_response">
              <div className="response">답변 설문수</div>
              <div className="response_num">45</div>
            </div>
          </div>
        </div>

        <div className="Mypage_survey">
          <div className="written_post">
            <div className="I_write">내가 만든 설문조사</div>
            <div className="I_write_list">
              {surveyList_written.map((survey, index) => (
                <div className="survey_item" key={index}>
                  <div className="survey_title">{survey.title}</div>
                  <div className="survey_date">{survey.date}</div>
                  <button className={`status_button ${survey.status === "진행중" ? "green" : "red"}`}>{survey.status}</button>
                  <button className="statistics_button">통계보기</button>
                </div>
              ))}
            </div>
          </div>

          <div className="writing_post">
            <div className="I_writing">내가 답변한 설문조사</div>
            <div className="I_writing_list">
              {surveyList_writing.map((survey, index) => (
                <div className="survey_item" key={index}>
                  <div className="survey_title">{survey.title}</div>
                  <div className="survey_date">{survey.date}</div>
                  <button className={`status_button ${survey.status === "진행중" ? "green" : "red"}`}>{survey.status}</button>
                  <button className="statistics_button">통계보기</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
