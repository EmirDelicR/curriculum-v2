import { Autoplay, A11y, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';

import AnimatedText from '@/UI/components/animatedText/AnimatedText';
import GeneralLink from '@/UI/components/links/generalLink/GeneralLink';

import { TIMELINE_DATA, TimelineItem } from './data';

import 'swiper/css';
import 'swiper/css/pagination';
import './Timeline.scss';

export default function Timeline() {
  return (
    <div className="timeline-page">
      <Swiper
        modules={[Autoplay, Pagination, A11y]}
        loop
        speed={1000}
        direction="horizontal"
        grabCursor
        spaceBetween={0}
        slidesPerView={2}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false
        }}
        pagination={{
          type: 'fraction',
          dynamicBullets: true,
          dynamicMainBullets: 3,
          clickable: true
        }}
        breakpoints={{
          10: {
            direction: 'vertical',
            slidesPerView: 1,
            spaceBetween: 30
          },
          890: {
            direction: 'horizontal',
            slidesPerView: 2,
            spaceBetween: 0
          }
        }}
      >
        {TIMELINE_DATA.map((item: TimelineItem) => (
          <SwiperSlide key={item.id}>
            <SlideItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function SlideItem({ item }: { item: TimelineItem }) {
  return (
    <>
      <div className="description">
        <div className="header">
          <FontAwesomeIcon icon={item.icon} />
          <span>{item.title}</span>
        </div>
        <div className="link">
          <AnimatedText>{item.job}</AnimatedText>
          <GeneralLink navigateTo={item.link}>
            {item.linkDescription}
          </GeneralLink>
        </div>

        <div className="location">
          <AnimatedText>{item.location}</AnimatedText>
          <FontAwesomeIcon icon={faMapLocationDot} />
        </div>
      </div>
      <div className="line"></div>
      <div className="timestamp">
        <span>{item.time}</span>
      </div>
    </>
  );
}
