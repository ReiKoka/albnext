import useModal from "../../hooks/useModal";
import Modal from "../ui/Modal";

type ServiceModalProps = {
  modalType: `open-service-${string}`;
  onClose: () => void;
  titleClassName?: string;
  modalClassName?: string;
};

function ServiceModal({
  modalType,
  onClose,
  titleClassName,
  modalClassName,
}: ServiceModalProps) {
  const { activeModal } = useModal();
  const isOpen = activeModal === modalType;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      titleClassName={titleClassName}
      modalClassName={modalClassName}
    >
      <div className="flex flex-col">
        <div className="flex w-full max-w-full items-center justify-center gap-4 overflow-hidden">
          <div className="aspect-[3/4] flex-1">
            <img
              src="/public/services-1-web.png"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
          <div className="aspect-[3/4] flex-1">
            <img
              src="/public/services-1-modal-2.jpeg"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ServiceModal;
