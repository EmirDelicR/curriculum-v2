import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLocationDot,
  faPhoneVolume
} from '@fortawesome/free-solid-svg-icons';

import AnimatedText from '@/UI/components/animatedText/AnimatedText';
import SocialLink from '@/UI/components/links/socialLink/SocialLink';

import ContactForm from '@/feature/ContactForm';

import { SOCIAL_PAGES } from '@/utils/constants';

import './Contact.scss';

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-headline">
        <AnimatedText isHeadline={true}>Contact me</AnimatedText>
      </div>
      <div className="contact-form-wrapper">
        <ContactForm />
      </div>
      <div className="connect-data">
        <h2>Get in touch</h2>
        <div className="connect-personal">
          <div>
            <FontAwesomeIcon icon={faEnvelope} size="xl" />
            <AnimatedText>emirdelictbf@gmail.com</AnimatedText>
          </div>
          <div>
            <FontAwesomeIcon icon={faPhoneVolume} size="xl" />
            <AnimatedText>0677 625 819 74</AnimatedText>
          </div>
          <div>
            <FontAwesomeIcon icon={faLocationDot} size="xl" />
            <AnimatedText>Vienna, Austria</AnimatedText>
          </div>
        </div>
        <div className="connect-social">
          {SOCIAL_PAGES.map((item) => (
            <SocialLink item={item} key={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
