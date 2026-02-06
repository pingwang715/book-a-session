import Button from '../UI/Button.tsx';

type SessionItemProps = {
  id: string;
  title: string;
  summary: string;
  image: string;
};

export default function SessionItem({ id, title, summary, image }: SessionItemProps) {
  return (
    <article className="session-item">
      <img src={image} alt={title} />
      <div className="sessions-data">
        <div>
          <p>{title}</p>
          <h3>{summary}</h3>
        </div>
        <p className="actions">
          <Button to={id}>Learn More</Button>
        </p>
      </div>
    </article>
  );
}
