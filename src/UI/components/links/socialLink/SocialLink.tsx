import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import './SocialLink.scss';

interface SocialLinkProps {
  item: {
    name: string;
    icon: IconProp;
    link: string;
    download?: string;
  };
}

export default function SocialLink({
  item: { name, icon, link, download }
}: SocialLinkProps) {
  return (
    <a
      className="social-link"
      href={link}
      target="_blank"
      rel="noreferrer"
      download={download}
    >
      <FontAwesomeIcon icon={icon} size="2x" />
      <i title={name.toUpperCase()} className={`${icon}`}></i>
    </a>
  );
}
