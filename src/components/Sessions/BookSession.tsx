import Modal from "../UI/Modal.tsx";
import React, { FormEvent, useRef } from "react";
import Input from "../UI/Input.tsx";

type BookSessionData = {
  name: string;
  email: string;
}
type BookSessionProps = {
  onClose?: () => void;
  onSave: (value: BookSessionData) => void;
}

const BookSession = ({ onClose, onSave }: BookSessionProps) => {

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // submission logic
    event.preventDefault();

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData) as BookSessionData;
    onSave(data);
    event.currentTarget.reset();
    onClose?.(); // close modal after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* booking form */}
      <div className="control">
        <Input id="name" label="Name" type="string"></Input>
        <Input id="email" label="Email" type="string"></Input>
      </div>
      <div className="actions">
        <button type="button" className="button" onClick={onClose}>Cancel</button>
        <button type="submit" className="button">Submit</button>
      </div>
    </form>
  )

}

export default BookSession;
