import { useState, useEffect, FC, Fragment } from 'react';
import { Transition } from '@headlessui/react';

export interface ToastProps {
  show: boolean;
  type?: 'success' | 'error' | 'info';
  message: string;
  onClose: () => void;
}

const Toast: FC<ToastProps> = ({ show, message, onClose, type }: ToastProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(show);
    if(show){
      setTimeout(() => {
        onClose()
      }, 3000)
    }
  }, [show]);

  return (
    <Transition
      as={Fragment}
      show={isOpen}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      afterLeave={onClose}
    >
      <div className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded shadow">
        {message}
      </div>
    </Transition>
  );
}

export default Toast