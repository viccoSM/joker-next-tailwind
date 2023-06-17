import clsxm from '@/utils/clsxm';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { FC, ReactNode, useState } from 'react';

interface CustomButtonProps {
  children: ReactNode;
  onClick?: (e: any) => void;
  onSubmit?: (e: any) => void;
  type?: 'button' | 'submit' | 'reset';
  link?: string;
  id?: string;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  required?:boolean
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
      if (onClick) {
        await new Promise<void>((resolve) => {
          setTimeout(async () => {
            await onClick(e); // Wait for the specific operation
            resolve();
          }, 300); // Delay time, in milliseconds
        });
      }
    } catch (error) {
      console.error(error);
    }
    setInternalLoading(false); // Stop the loading after the operation is completed
  };
  

  // Link
  if(props.link){
    return (
      <>
      <Link 
        href={props.link}
        id={props.id}
        className={clsxm('disabled:opacity-70 font-medium',
          props.className
        )}
      >
        {children}
      </Link>
      </>
    )
  }

  // Button
  return (
    <button
      type={props.type || 'button'}
      id={props.id}
      disabled={props.disabled || isLoading || internalLoading}
      onClick={onClick && handleClick}
      className={clsxm('disabled:opacity-70 font-medium',
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
