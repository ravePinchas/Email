import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { emailService } from "../services/email.service";

export function EmailDetails() {
  const [email, setEmail] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadEmail();
  }, []);

  async function loadEmail() {
    try {
      const email = await emailService.getById(params.emailId);
      email.isRead = true;
      await emailService.save(email);
      setEmail(email);
    } catch (err) {
      navigate("/email");
      console.log("Had issues loading email", err);
    }
  }

  if (!email) return <div>Loading</div>;
  return (
    <section className="email-details">
      <h1>{email.subject}</h1>
      <h3>{email.body}</h3>
      <Link to="/email">GoBack</Link>
    </section>
  );
}
