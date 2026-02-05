import React, { ReactNode, forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  children: ReactNode;
}

export type ModalRef = {
  open: () => void;
  close: () => void;
}

const Modal = forwardRef<ModalRef, ModalProps>(({children}, ref) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open: () => {
      dialogRef.current?.showModal();
    },
    close: () => {
      dialogRef.current?.close();
    }
  }));

  const modalRoot = document.getElementById("modal-root");

  if (!modalRoot) {
    console.error("modal-root element not found");
    return null;
  }

  return createPortal(
    <dialog ref={dialogRef} className="modal">
      {children}
    </dialog>,
    modalRoot
  )
});

Modal.displayName = "Modal";
export default Modal;
