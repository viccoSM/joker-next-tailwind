import React, {FC, ReactNode} from 'react';
import clsxm from "@/utils/clsxm";

interface FormInputProps {
  id: string
  onChange: () => void
  placeholder?: string
  type?: string
  label?: string
  append?: ReactNode
  prepend?: ReactNode
  className?: string
}

const FormInput:FC<FormInputProps> = ({onChange, ...props}) => {
  return (
    <div className='text-left space-y-1'>
      {props.label && <label htmlFor={props.id} className='mx-1'>{props.label}</label>}
      <div className="flex items-center border p-3 rounded-xl">

        {props.prepend && props.prepend}

        <input
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
          className={clsxm('outline-none flex-1 w-full -internal-autofill-selected:bg-transparent',
            props.className,
            props.prepend && 'pl-2',
            props.append && 'pr-2'
          )}
          onChange={onChange}
        />

        {props.append && props.append}

      </div>
    </div>
  );
}

export default FormInput;