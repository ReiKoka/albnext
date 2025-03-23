import clsx from "clsx";
import { ReactNode, useRef } from "react";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";
import { useEventListener, useOnClickOutside } from "usehooks-ts";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: ReactNode;
  titleClassName?: string;
  modalClassName?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  titleClassName,
  modalClassName,
}) => {
  const innerRef = useRef<HTMLDivElement>(null);

  const baseTitleStyles = `font-primary text-foreground dark:text-background text-center capitalize ${
    description ? "-mb-2" : "pb-6"
  } text-xl font-semibold`;
  const titleStyle = twMerge(clsx(baseTitleStyles, titleClassName));

  const baseModalStyle =
    "bg-background dark:bg-foreground animate-jump-in animate-ease-out relative flex max-h-[90dvh] w-full max-w-md flex-col overflow-y-auto rounded-lg p-6 shadow-slide-2 duration-500";
  const modalStyle = twMerge(clsx(baseModalStyle, modalClassName));

  useOnClickOutside(innerRef as React.RefObject<HTMLDivElement>, onClose);
  useEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  });

  if (!isOpen) return null;

  const modalContent = (
    <>
      <div
        className="animate-fade animate-once animate-duration-1000 animate-ease-out dark:bg-secondary/30 fixed inset-0 z-40 h-full w-full bg-transparent backdrop-blur-[2.5px]"
        onClick={onClose}
        style={{ pointerEvents: "auto" }}
      ></div>

      <dialog
        open
        className="fixed inset-0 z-50 m-0 flex h-dvh w-dvw items-center justify-center border-0 bg-transparent p-8"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className={modalStyle} ref={innerRef}>
          <h2 className={titleStyle}>{title}</h2>
          {description && (
            <p className="font-primary text-foreground pb-6 text-center">
              {description}
            </p>
          )}
          <div className="w-full max-w-full grow h-full flex flex-col">{children}</div>
        </div>
      </dialog>
    </>
  );

  return createPortal(
    modalContent,
    document.getElementById("modal-root") as HTMLElement,
  );
};

export default Modal;
