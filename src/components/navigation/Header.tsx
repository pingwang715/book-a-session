import React, { ReactNode } from "react";
import Button from "../UI/Button.tsx";
import { ModalRef } from "../UI/Modal.tsx";
import Modal from "../UI/Modal.tsx";
import { useRef } from "react";
import UpcomingSessions from "../Sessions/UpcomingSessions.tsx";
import { SESSIONS } from '../../dummy-sessions.ts'; // normally, we would probably load that from a server
import { NavLink } from "react-router-dom";

export type HeaderProps = {
  children: ReactNode;
}
export default function Header(props: HeaderProps) {
  const modalRef = useRef<ModalRef>(null);

  return (
    <>
      <header id="main-header">
        <div>
          <h1>ReactMentoring</h1>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''} end>Our Mission</NavLink>
            </li>
            <li>
              <NavLink to="/sessions" className={({isActive}) => isActive ? 'active' : ''}>Browse Sessions</NavLink>
            </li>
            <li>
              <Button onClick={() => modalRef.current?.open()}>Upcoming Sessions</Button>
              <Modal ref={modalRef}>
                <UpcomingSessions sessions={SESSIONS} onClose={() => modalRef.current?.close()}>

                </UpcomingSessions>
              </Modal>
            </li>

          </ul>
        </nav>
      </header>
      {props.children};
    </>
  )
}
