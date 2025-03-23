import { HiOutlineEnvelope } from "react-icons/hi2";
import useModal from "../../hooks/useModal";
import Input from "../ui/Input";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import handWithMail from "../../assets/images/hand-with-mail.png";

type SubscribeModalProps = {
  title: string;
  modalType: "join-mailing-list";
  onClose: () => void;
  titleClassName: string;
  modalClassName: string;
};

function SubscribeModal({
  title,
  modalType,
  onClose,
  titleClassName,
  modalClassName,
}: SubscribeModalProps) {
  const { activeModal } = useModal();
  const isOpen = activeModal === modalType;

  return (
    <Modal
      title={title}
      isOpen={isOpen}
      onClose={onClose}
      titleClassName={titleClassName}
      modalClassName={modalClassName}
    >
      <img
        src={handWithMail}
        className="absolute top-5 right-0 -z-10 h-auto w-full opacity-50"
      />
      <div className="flex h-full w-full grow flex-col justify-end gap-2">
        <p className="text-light text-secondary font-primary mb-4 w-full text-center text-base">
          Sign up for exclusive updates, free e-books & free consultation
        </p>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email..."
          icon={<HiOutlineEnvelope />}
        />
        <Button
          type="button"
          variant="default"
          className="bg-background border-background justify-center py-2.5 text-sm font-light tracking-wider uppercase"
        >
          Submit
        </Button>
      </div>
    </Modal>
  );
}

export default SubscribeModal;
