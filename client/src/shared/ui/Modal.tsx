import type { ModalProps } from '../model/types';
import Button from './Button';

const Modal = ({ isOpen, title, children, onClose }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0  flex items-center justify-center bg-black/40">
      <div className="relative w-full max-w-md rounded-md bg-white p-6">
        <Button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3"
          aria-label="Close modal"
        >
          X
        </Button>
        {title && <h2 className="md-4 text-xl font-bold">{title}</h2>}
        {children}
      </div>
    </div>
  );
};

export default Modal;
