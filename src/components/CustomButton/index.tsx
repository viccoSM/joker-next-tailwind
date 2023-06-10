import clsxm from '@/utils/clsxm';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, ReactNode, useState } from 'react';

interface CustomButtonProps {
  children: ReactNode;
  onClick?: (e: any) => void;
  onSubmit?: (e: any) => void;
  type?: 'button' | 'submit' | 'reset';
  id?: string;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean
}

const CustomButton: FC<CustomButtonProps> = ({
  children,
  onClick,
  onSubmit,
  isLoading,
  ...props
}) => {
  const [internalLoading, setInternalLoading] = useState(false);

  const handleClick = async (e: any) => {
    setInternalLoading(true);
    try {
      if (onClick) await onClick(e);
    } catch (error) {
      console.error(error);
    }
    setInternalLoading(false);
  };

  return (
    <button
      type={props.type || 'button'}
      id={props.id}
      disabled={props.disabled || isLoading || internalLoading}
      onClick={handleClick}
      className={clsxm('disabled:opacity-90 text-white',
        props.className
      )}
    >
      {isLoading || internalLoading ? (
        <FontAwesomeIcon icon={faCircleNotch} spin />
      ) : (
        children
      )}
    </button>
  );
};

export default CustomButton;
