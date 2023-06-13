import {
  CSSProperties,
  useRef,
  useMemo,
  DetailedHTMLProps,
  InputHTMLAttributes,
  ChangeEvent
} from 'react';

import './Input.scss';

const NOT_EMPTY_PATTERN = '.{1,}';
const EMAIL_PATTERN = '^[^ ]+@[^ ]+\\.[a-z]{2,6}$';

function getPattern(withValidator: boolean) {
  if (!withValidator) {
    return NOT_EMPTY_PATTERN;
  }

  return EMAIL_PATTERN;
}

type GenericInput = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
type InputType = 'text' | 'email';

interface Props {
  label: string;
  value: string;
  onChangeHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: InputType;
  useValidator?: boolean;
}

export function Input({
  label,
  value,
  onChangeHandler,
  type = 'text',
  useValidator = true,
  ...rest
}: GenericInput & Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const modifiedLabel = useMemo(() => {
    const labelCharacters = Array.from(label);
    return labelCharacters.map((item, index) => {
      return (
        <span
          key={`${item}-${index}`}
          aria-hidden="true"
          style={{ '--index': index } as CSSProperties}
        >
          {item === ' ' ? '\u00A0' : item}
        </span>
      );
    });
  }, [label]);

  return (
    <div className="input" role="input">
      <input
        ref={inputRef}
        onChange={onChangeHandler}
        required
        type={type}
        className="field"
        pattern={getPattern(useValidator)}
        placeholder="Enter data"
        value={value}
        {...rest}
      />
      <label htmlFor={label} className="label">
        {modifiedLabel}
        <span className="sr-only">{label}</span>
      </label>
    </div>
  );
}
