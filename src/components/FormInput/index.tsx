import React, { FC, ReactNode } from 'react';
import clsxm from "@/utils/clsxm";

interface FormInputProps {
  label?: string
  id: string
  placeholder?: string
  className?: string
  feedback?: string
  value: string | number
  append?: ReactNode
  prepend?: ReactNode
  formatter?: (value: string) => string
  onChange: (arg: any) => void;
  type?: 'email' | 'text' | 'number' | 'password'
  isValid?: boolean
  required?:boolean
}

const FormInput:FC<FormInputProps> = ({onChange, required, formatter, isValid=true, ...props}) => {
  const handleFormatValue = (value: string): string => {
    if (formatter) {
      return formatter(value);
    }
    return value;
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const formattedValue = handleFormatValue(value);
    onChange({
      ...event,
      target: { id: event.target.id, value: formattedValue },
    });
  };

  return (
    <div className='text-left space-y-1'>
      {props.label && <label htmlFor={props.id} className='mx-1'>{props.label}</label>}
      <div className={clsxm("flex items-center border p-3 rounded-xl",
          String(props?.value)?.length > 0 && !isValid && 'border-red-400',
          isValid === undefined && ''
        )}>

        {props.prepend && props.prepend}

        <input
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
          className={clsxm('outline-none flex-1 w-full -internal-autofill-selected:bg-transparent appearance-none',
            props.className,
            props.prepend && 'pl-2',
            props.append && 'pr-2',
            String(props?.value)?.length > 0 && !isValid && 'text-red-400'
          )}
          value={props.value}
          onChange={handleOnChange}
        />

        {props.append && props.append}

      </div>
      {String(props?.value)?.length > 0 && !isValid && (
        <p className='text-red-400 text-sm mx-1'>{props.feedback}</p>
      )}
    </div>
  );
}

export default FormInput;