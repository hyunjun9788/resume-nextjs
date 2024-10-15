import { ISkill } from '../component/skill/ISkill';

const Languages: ISkill.Skill = {
  category: 'Languages',
  items: [
    {
      title: 'HTML/CSS',
    },

    {
      title: 'JavaScript',
    },
    {
      title: 'TypeScript',
    },
  ],
};

const frameworkAndLibraries: ISkill.Skill = {
  category: 'Fameworks & Libraries',
  items: [
    {
      title: 'React.js',
    },
    {
      title: 'Next.js',
    },
    {
      title: 'Tanstack Query',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [Languages, frameworkAndLibraries],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
