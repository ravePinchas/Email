import React from "react";
import { Link } from "react-router-dom";
import yellowStar from "../assets/imgs/yellowStar.png";
import blackStar from "../assets/imgs/blackStar.png";
import { emailService } from "../services/email.service";

export function EmailPreview({ email }) {
  var boldClass = email.isRead ? "" : "bold";
  const starClass = email.isStarred ? yellowStar : blackStar;

  async function changeStar() {
    console.log("Entered");
    email.isStarred = !email.isStarred;
    await emailService.save(email);
  }

  return (
    <article key={email.id} className={boldClass}>
      <img src={starClass} onClick={changeStar} alt="buttonpng" border="0" />
      <Link to={`/email/${email.id}`}>{email.subject} 🧮</Link>
    </article>
  );
}
