import { useEffect, useState } from "react";
import { EmailList } from "./EmailList";
import { emailService } from "../services/email.service";

export function MainContentEmail() {
  const [emails, setEmails] = useState(null);
  //const [filterBy, setFilterBy] = useState(emalService.getDefaultFilter());

  useEffect(() => {
    loadEmails();
  }, []);

  // function onSetFilter(fieldsToUpdate) {
  //   setFilterBy((prevFilterBy) => ({ ...prevFilterBy, ...fieldsToUpdate }));
  // }

  // function onClearFilter() {
  //   setFilterBy(robotService.getDefaultFilter());
  // }

  async function loadEmails() {
    try {
      const emails = await emailService.query();
      setEmails(emails);
    } catch (err) {
      console.log("Had issues loading emails", err);
    }
  }

  async function onRemoveEmail(emailId) {
    try {
      console.log("emailId", emailId);
      await emailService.remove(emailId);
      setEmails((prevEmails) =>
        prevEmails.filter((email) => email.id !== emailId)
      );
    } catch (err) {
      console.log("Had issues loading emails", err);
    }
  }

  console.log(emails);
  if (!emails) return <div>Loading</div>;
  return (
    <>
      <div className="item main-content">
        <button>Date</button>
        <button>Subject</button>
        <button>All</button>
        <EmailList emails={emails} onRemoveEmail={onRemoveEmail}></EmailList>
      </div>
    </>
  );

  // console.log("filterBy from index", filterBy);
  // if (!robots) return <div>Loading..</div>;
  // return (
  //   <section className="robot-index">
  //     <h1>Welcome! this is our robots</h1>
  //     {/* <button onClick={onClearFilter}>Clear filter</button> */}
  //     <RobotFilter onSetFilter={onSetFilter} filterBy={filterBy} />
  //     <RobotList robots={robots} onRemove={onRemoveRobot} />
  //   </section>
  // );
}
