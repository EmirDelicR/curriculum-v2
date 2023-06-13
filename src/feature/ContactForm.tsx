import { ChangeEvent, useState } from 'react';

import { Button } from '@/UI/components/buttons/button/Button';
import { Input } from '@/UI/components/input/Input';
import { Textarea } from '@/UI/components/textarea/Textarea';

import { InputData, onInputChange, emailValidator } from '@/utils/formHelpers';

import './ContactForm.scss';

export default function ContactForm() {
  const [email, setEmail] = useState<InputData>({
    value: '',
    isValid: false
  });
  const [name, setName] = useState<InputData>({
    value: '',
    isValid: false
  });
  const [text, setText] = useState<string>('');
  const isButtonDisabled = !(email.isValid && name.isValid);

  const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    onInputChange(event.target.value, setEmail, emailValidator);
  };

  const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    onInputChange(event.target.value, setName);
  };

  const resetForm = () => {
    setEmail({ value: '', isValid: false });
    setName({ value: '', isValid: false });
    setText('');
  };

  const handleFormSubmit = async () => {
    console.log('Submited');

    // if (isSuccess) {
    //   resetForm();
    //   onSubmitCallback();
    // }
  };

  return (
    <div className="contact-form">
      <div className="inputs">
        <Input
          label="Email"
          value={email.value}
          type="email"
          onChangeHandler={onEmailChange}
        />
        <Input label="Name" value={name.value} onChangeHandler={onNameChange} />
      </div>
      <Textarea onChangeHandler={setText} value={text} />
      <Button
        type="submit"
        onClickHandler={handleFormSubmit}
        isDisabled={isButtonDisabled}
      >
        Send message
      </Button>
    </div>
  );
}
