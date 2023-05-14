import { useState } from "react";

type Props = {
  className?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  value?: string;
  disabled?: boolean;
};

const TextInput = ({
  className,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  onKeyDown,
  value,
  disabled,
}: Props) => {
  const [text, setText] = useState(value);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setText(value);
    onChange(value);
  };

  return (
    <input
      type="text"
      value={text}
      className={className}
      placeholder={placeholder}
      onChange={changeHandler}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      disabled={disabled}
    />
  );
};

export default TextInput;
