import './Contact.scss';

export default function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="gmap-area">
        <div className="gmap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4878.672913089582!2d16.374223362582853!3d48.185129479331685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476da93d27d89adb%3A0xf6dac687a4d8cf79!2sBitmovin!5e0!3m2!1shr!2sat!4v1684938363592!5m2!1shr!2sat"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="contact-container">
          <div className="address-wrap">
            {/* <address>
            <h3>{{ $t('contact.home') }}</h3>
            <p>Mannheimstraße 4,</p>
            <p>{{ $t('contact.floor') }} 6/39</p>
            <p>4040 Linz</p>
            <p>{{ $t('contact.austria') }}</p>
          </address>
          <address>
            <h3>{{ $t('contact.work') }}</h3>
            <p>Spittelwiese 15</p>
            <p>4020 Linz</p>
            <p>{{ $t('contact.austria') }}</p>
          </address> */}
          </div>
          <div className="phone-number">
            <p>Tel: +43677-625-819-74</p>
            <p>Mail: emirdelictbf@gmail.com</p>
          </div>
          <div className="social-links">
            {/* <SocialLink v-for="item in getSocialPages" :key="item.name" :item="item" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
