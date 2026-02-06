import { ComponentPropsWithoutRef } from "react";

export type InputProps = ComponentPropsWithoutRef<"input"> & {
  label: string;
  id: string;
}

export default function Input({ label, id, ...rest }: InputProps) {
  return (
    <div className="control">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...rest} />
    </div>
  );
}
