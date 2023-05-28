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

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="connect">
        <div className="icon-wrapper">
          <h1>Contact</h1>
          <FontAwesomeIcon className="icon" icon={faEnvelope} size="xl" />
          <FontAwesomeIcon className="icon" icon={faMobileRetro} size="xl" />
          <FontAwesomeIcon className="icon" icon={faComments} size="xl" />
          <FontAwesomeIcon className="icon" icon={faLocationDot} size="xl" />
          <FontAwesomeIcon className="icon" icon={faGlobe} size="xl" />
          <FontAwesomeIcon className="icon" icon={faTowerCell} size="xl" />
          <FontAwesomeIcon className="icon" icon={faPager} size="xl" />
        </div>
        <div className="connect-data">
          <h3>Get in touch</h3>
          <div className="connect-element">
            <FontAwesomeIcon icon={faPhoneVolume} size="xl" /> 0677 625 819 74
          </div>
          <div className="connect-element">
            <FontAwesomeIcon icon={faEnvelope} size="xl" />
            emirdelictbf@gmail.com
          </div>
          <div className="connect-element">
            <FontAwesomeIcon icon={faLocationDot} size="xl" />
            Vienna, Austria
          </div>
        </div>
        <div>
          {SOCIAL_PAGES.map((item) => (
            <SocialLink item={item} key={item.name} />
          ))}
        </div>
      </div>
      <div className="contact-form">xxx</div>
    </div>
  );
}
