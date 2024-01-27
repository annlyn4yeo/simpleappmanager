import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef(function Modal({ children, buttonText }, ref) {
  const modal = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        modal.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={modal} className="backdrop:bg-stone-900/90 p-5 shadow-md rounded-md">
      {children}
      <form method="dialod" className="text-right mt-6">
        <Button>{buttonText}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
