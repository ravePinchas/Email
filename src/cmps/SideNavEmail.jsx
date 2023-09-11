import { Link } from "react-router-dom";

export function SideNavEmail() {
  return (
    <>
      <div className="item side-nav-email">
        <Link to="/email/inbox">
          <div>Inbox</div>
        </Link>

        <Link to="/email/starred">
          <div>starred</div>
        </Link>

        <Link to="/email/sent">
          <div>sent</div>
        </Link>

        <Link to="/email/draft">
          <div>draft</div>
        </Link>

        <Link to="/email/trash">
          <div>trash</div>
        </Link>
      </div>
    </>
  );
}
