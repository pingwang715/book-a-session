import React, { ReactNode } from "react";


type UpcomingSessionProps = {
  id: string;
  title: string;
  summary: string;
  date: string;
}

export default function UpcomingSession({
    title,
    summary,
    date,

  }: UpcomingSessionProps) {
  return (
    <div className="upcoming-session">
      <h3>{title}</h3>
      <p>{summary}</p>
      <time dateTime={new Date(date).toISOString()}>
        {new Date(date).toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        })}
      </time>
    </div>

  );
}
