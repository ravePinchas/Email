import React from "react";
import { EmailPreview } from "./EmailPreview";

export function EmailList({ emails, onRemoveEmail }) {
  var boldClass;
  return (
    <>
      {emails.map((email) => (
        <div key={email.id}>
          <EmailPreview email={email} />
          <div className="email-actions">
            <button onClick={() => onRemoveEmail(email.id)}>X</button>
          </div>
        </div>
      ))}
    </>
  );
}
