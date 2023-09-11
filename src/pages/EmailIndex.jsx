import { SideNavEmail } from "../cmps/SideNavEmail";
import { EmailFilter } from "../cmps/EmailFilter";
import { MainContentEmail } from "../cmps/MainContentEmail";
import { Outlet } from "react-router-dom";

export function Email() {
  return (
    <section>
      <div className="email">
        <EmailFilter></EmailFilter>
        <SideNavEmail></SideNavEmail>
        <MainContentEmail></MainContentEmail>

        <Outlet></Outlet>
      </div>
    </section>
  );
}
