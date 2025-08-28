import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '교육 플랫폼',
      href: getPermalink('/edu'),
    },
    {
      text: '비즈니스 솔루션',
      href: getPermalink('/business'),
    },
    {
      text: '연락처',
      href: getPermalink('/contact'),
    },
  ],
  actions: [
    { 
      text: '비즈니스 문의', 
      href: 'https://pf.kakao.com/_aEFxnn',
      variant: 'primary',
      target: '_blank'
    }
  ],
};

export const footerData = {
  links: [
    {
      title: '교육 서비스',
      links: [
        { text: 'CodeBridgeAI Edu', href: getPermalink('/edu') },
      ],
    },
    {
      title: '비즈니스 솔루션',
      links: [
        { text: 'Easysignage', href: getPermalink('/business#easysignage') },
        { text: 'AI 솔루션 개발', href: getPermalink('/business#ai-solutions') },
      ],
    },
    {
      title: '지원',
      links: [
        { text: '문의하기', href: getPermalink('/contact') },
        { text: '무료 체험', href: 'https://lms.codebridge.ai.kr' },
      ],
    },
    {
      title: '회사',
      links: [
        { text: '회사 소개', href: getPermalink('/') },
        { text: '브랜드 스토리', href: getPermalink('/#content-one') },
        { text: '연락처', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: '이용약관', href: getPermalink('/terms') },
    { text: '개인정보처리방침', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'KaKao', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://codebridge.ai.kr"> CodeBridgeAI</a> · All rights reserved.
  `,
};
