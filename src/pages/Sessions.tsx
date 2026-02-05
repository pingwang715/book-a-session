import { SESSIONS } from '../dummy-sessions.ts'; // normally, we would probably load that from a server
import Header from '../components/navigation/Header.tsx';
import Button from '../components/UI/Button.tsx';

export default function SessionsPage() {
  return (
    <Header>
      <main id="sessions-page">
        <header>
          <h2>Available mentoring sessions</h2>
          <p>
            From an one-on-one introduction to React's basics all the way up to a
            deep dive into state mechanics - we got just the right session for
            you!
          </p>
        </header>

        <div id="sessions-list">
            {SESSIONS.map(session => (
              <article key={session.id} className="session-item">
                <img src={session.image} alt={session.title} />
                <div className="sessions-data">
                  <p>{session.title}</p>
                  <h3>{session.summary}</h3>
                  <p>
                    <time dateTime={new Date(session.date).toISOString()}>
                      {new Date(session.date).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </time>
                  </p>
                  <Button to={`/sessions/${session.id}`}>Learn More</Button>
                </div>
              </article>
            ))}
        </div>
      </main>
    </Header>
  );
}
