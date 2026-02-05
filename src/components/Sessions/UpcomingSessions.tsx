import UpcomingSession from "./UpcomingSession";
import { UpcomingSessionProps } from "./UpcomingSession";
import Button from "../UI/Button";

type UpcomingSessionData = {
  id: string;
  sessionId: string;
  title: string;
  summary: string;
  date: string;
  image: string;
  userName: string;
  userEmail: string;
}

type UpcomingSessionsProps = {
  sessions: UpcomingSessionData[];
  onClose: () => void;
}

export default function UpcomingSessions({sessions, onClose}: UpcomingSessionsProps) {
  return (
    <div className="upcoming-sessions">
      <h2>Upcoming Sessions</h2>

      {sessions.length === 0 ? (
        <p>You haven't booked any sessions yet.</p>
      ) : (
        <article className="upcoming-sessions">
          {sessions.map((session) => (
            <div className="session-data" key={session.id}>
              <UpcomingSession
                id={session.id}
                title={session.title}
                summary={session.summary}
                date={session.date}
              >
              </UpcomingSession>
            </div>
          ))}
        </article>
      )}

      <Button className="button" onClick={onClose}>Close</Button>
    </div>
  )
}
