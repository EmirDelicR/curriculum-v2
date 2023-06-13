import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faMobileRetro,
  faComments,
  faLocationDot,
  faGlobe,
  faTowerCell,
  faPager,
  faPhoneVolume
} from '@fortawesome/free-solid-svg-icons';

import './Contact.scss';
import { SOCIAL_PAGES } from '@/utils/constants';
import SocialLink from '@/UI/components/links/socialLink/SocialLink';
import ContactForm from '@/feature/ContactForm';

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="icon-wrapper">
          <FontAwesomeIcon className="icon" icon={faEnvelope} />
          <FontAwesomeIcon className="icon" icon={faMobileRetro} />
          <FontAwesomeIcon className="icon" icon={faComments} />
          <FontAwesomeIcon className="icon" icon={faLocationDot} />
          <FontAwesomeIcon className="icon" icon={faGlobe} />
          <FontAwesomeIcon className="icon" icon={faTowerCell} />
          <FontAwesomeIcon className="icon" icon={faPager} />
        </div>
        <div className="contact-headline">
          <h1>Contact me</h1>
        </div>
      </div>

      <div className="connect">
        <div className="connect-data">
          <h3>Get in touch</h3>
          <div className="connect-personal">
            <div>
              <FontAwesomeIcon icon={faEnvelope} size="xl" />{' '}
              emirdelictbf@gmail.com
            </div>
            <div>
              <FontAwesomeIcon icon={faPhoneVolume} size="xl" /> 0677 625 819 74
            </div>
            <div>
              <FontAwesomeIcon icon={faLocationDot} size="xl" /> Vienna, Austria
            </div>
          </div>
          <div className="connect-social">
            {SOCIAL_PAGES.map((item) => (
              <SocialLink item={item} key={item.name} />
            ))}
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
