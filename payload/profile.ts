import { faEnvelope, faPen } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { IProfile } from '../component/profile/IProfile';
import image from '../asset/profile5.png';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
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
      title: 'https://hjdevlog0.tistory.com',
      link: 'https://hjdevlog0.tistory.com',
      icon: faPen,
    },

    {
      link: 'https://github.com/hyunjun9788',
      icon: faGithub,
    },
  ],
  // latestUpdated: '2025-03-14',
  // notice: {
  //   title: '"저에 대한 물음표를 느낌표로 바꿀 수 있도록, 끊임없이 성장하고 노력하겠습니다."',
  //   // icon: faExclamation,
  // },
};

export default profile;
