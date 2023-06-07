import React, { FC, ReactNode } from 'react';
import clsxm from "@/utils/clsxm";

interface FormInputProps {
  id: string
  onChange: (arg: any) => void;
  placeholder?: string
  type?: 'email' | 'text' | 'number'
  label?: string
  append?: ReactNode
  prepend?: ReactNode
  className?: string
  formatter?: (value: string) => string
  isValid?: boolean
  required?:boolean
  value: string | number
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
          className={clsxm('outline-none flex-1 w-full -internal-autofill-selected:bg-transparent',
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
    </div>
  );
}

export default FormInput;