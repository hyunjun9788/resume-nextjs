import { faEnvelope, faPen, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/me.jpg';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image: '',
  name: {
    title: '남현준',
    small: '',
  },
  contact: [
    {
      title: 'namhyunjun9788@gmail.com',
      link: 'mailto:namhyunjun9788@gmail.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://velog.io/@hyunjun9788',
      link: 'https://velog.io/@hyunjun9788',
      icon: faPen,
    },

    {
      link: 'https://github.com/hyunjun9788',
      icon: faGithub,
    },
  ],
  notice: {
    title:
      "The content below is all fictitious and is just a sample from 'https://github.com/uyu423/resume-nextjs'.",
    icon: faBell,
  },
};

export default profile;
