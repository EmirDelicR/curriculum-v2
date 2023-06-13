import { ChangeEvent, useState } from 'react';
import emailjs from '@emailjs/browser';

import { Button } from '@/UI/components/buttons/button/Button';
import { Input } from '@/UI/components/input/Input';
import { Textarea } from '@/UI/components/textarea/Textarea';

import { classNameHelper } from '@/utils/generalHelpers';
import { InputData, onInputChange, emailValidator } from '@/utils/formHelpers';

import './ContactForm.scss';

interface InfoMessage {
  type: 'success' | 'error' | '';
  message: string;
}

export default function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const [infoMessage, setInfoMessage] = useState<InfoMessage>({
    type: '',
    message: ''
  });
  const [email, setEmail] = useState<InputData>({
    value: '',
    isValid: false
  });
  const [name, setName] = useState<InputData>({
    value: '',
    isValid: false
  });
  const [message, setMessage] = useState<string>('');
  const isButtonDisabled = !(email.isValid && name.isValid && !isSending);

  const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    onInputChange(event.target.value, setEmail, emailValidator);
  };

  const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    onInputChange(event.target.value, setName);
  };

  const resetForm = () => {
    setEmail({ value: '', isValid: false });
    setName({ value: '', isValid: false });
    setMessage('');
  };

  const handleFormSubmit = async () => {
    setIsSending(true);
    setTimeout(() => {
      console.log('sending');
      setIsSending(false);
      setInfoMessage({
        type: 'error',
        message: 'Message send successfully.'
      });
    }, 2000);
    emailjs
      .send(
        'service_wut2gj5',
        'template_ar89z6i',
        { name: name.value, email: email.value, message },
        '1CCAT01VQWGeCewa4'
      )
      .then(
        () => {
          resetForm();
          setIsSending(false);
          setInfoMessage({
            type: 'success',
            message: 'Message send successfully.'
          });
        },
        (error) => {
          setIsSending(false);
          setInfoMessage({
            type: 'error',
            message: error.text
          });
        }
      );
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
        <Input
          label="Name"
          value={name.value}
          onChangeHandler={onNameChange}
          useValidator={false}
        />
      </div>
      <Textarea onChangeHandler={setMessage} value={message} />
      <Button
        type="submit"
        onClickHandler={handleFormSubmit}
        isDisabled={isButtonDisabled}
      >
        {isSending ? 'Sending...' : 'Send message'}
      </Button>
      <div className={classNameHelper('form-feedback', infoMessage.type)}>
        {infoMessage.message}
      </div>
    </div>
  );
}
