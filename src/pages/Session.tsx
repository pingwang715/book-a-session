import { useParams } from 'react-router-dom';

import { SESSIONS } from '../dummy-sessions.ts';
import Header from '../components/navigation/Header.tsx';
import Button from '../components/UI/Button.tsx';
import Modal, { ModalRef } from '../components/UI/Modal.tsx';
import { useState } from 'react';
import { useRef } from "react";
import BookSession from '../components/Sessions/BookSession.tsx';

export default function SessionPage() {
  const params = useParams<{ id: string }>();

  const sessionId = params.id;
  const loadedSession = SESSIONS.find((session) => session.id === sessionId);

  const modalRef = useRef<ModalRef>(null);

  const handleSaveBooking = (data: {name: string, email: string}) => {
    console.log('====================================');
    console.log("Booking submitted:", data);
    console.log('====================================');
    console.log("Session ID", sessionId);
    console.log('====================================');
  };

  if (!loadedSession) {
    return (
      <main id="session-page">
        <p>No session found!</p>
      </main>
    );
  }

  return (
    <Header>
      <main id="session-page">
        <article>
          <header>
            <img
              src={loadedSession.image}
              alt={loadedSession.title}
            />
            <div>
              <h2>{loadedSession.title}</h2>
              <time dateTime={new Date(loadedSession.date).toISOString()}>
                {new Date(loadedSession.date).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}
              </time>
              <p>
                {/* Todo: Add button that opens "Book Session" dialog / modal */}
                <Button onClick={() => modalRef.current?.open()}>
                  Book a Session
                </Button>

                <Modal ref={modalRef}>
                  <BookSession onSave={handleSaveBooking} onClose={() => modalRef.current?.close()}></BookSession>
                </Modal>
              </p>
            </div>
          </header>
          <p id="content">{loadedSession.description}</p>
        </article>
      </main>
    </Header>
  );
}
