import Button from '../UI/Button.tsx';

type SessionItemProps = {
  id: string;
  title: string;
  summary: string;
  image: string;
  date: string;
};

export default function SessionItem({ id, title, summary, image, date }: SessionItemProps) {
  return (
    <article className="session-item">
      <img src={image} alt={title} />
      <div className="sessions-data">
        <p>{title}</p>
        <h3>{summary}</h3>
        <p>
          <time dateTime={new Date(date).toISOString()}>
            {new Date(date).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}
          </time>
        </p>
        <Button to={`/sessions/${id}`}>Learn More</Button>
      </div>
    </article>
  );
}
