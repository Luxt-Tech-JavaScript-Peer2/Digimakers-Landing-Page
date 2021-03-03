import React from "react";
import "../styles/team.css";

export default function TeamItem(props) {
  console.log(props);
  return (
    <div className="team-card">
      <div className="banner"></div>
      <div className="main-card">
        <div className="team-brand">
          <img src={props.item.image} alt="" />
        </div>
        <div className="inner">
          <div className="brand-desc">
            <h3>{props.item.name}</h3>
            <p> {props.item.tittle}</p>
            <p><em className="role">{props.item.role}</em></p>
          </div>
          <div class="team-desc">
            <p>{props.item.description}</p>
          </div>
          <div className="socials">
            <a href={props.item.socials.twitter}>
              <i class="fab fa-twitter-square"></i>
            </a>
            <a href={props.item.socials.linkedin}>
              <i class="fab fa-linkedin"></i>
            </a>
            <a href={props.item.socials.github}>
              <i class="fab fa-github-square"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
