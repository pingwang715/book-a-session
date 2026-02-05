import { SESSIONS } from '../../dummy-sessions.ts';
import SessionItem from './SessionItem.tsx';

export default function SessionsList() {
  return (
    <div id="sessions-list">
      {SESSIONS.map(session => (
        <SessionItem
          key={session.id}
          id={session.id}
          title={session.title}
          summary={session.summary}
          image={session.image}
          date={session.date}
        />
      ))}
    </div>
  );
}
