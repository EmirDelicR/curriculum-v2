export type InputData = { value: string; isValid: boolean };
type Validator = (value: string) => boolean;
type Setter = (data: InputData) => void;

export const emailValidator = (value: string) =>
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/.test(
    value
  );

export const isNotEmptyString = (value: string) => {
  return value.trim().length !== 0;
};

export const onInputChange = (
  value: string,
  setter: Setter,
  validator: Validator = isNotEmptyString
) => {
  const isValid = validator(value);
  setter({ value, isValid });
};
