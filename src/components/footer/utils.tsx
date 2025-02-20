const TIMPI_URL = 'https://timpi.io/';
const TIMPI_STAKING_URL = 'https://staking.timpi.io/';
const TIMPI_MEDIUM_URL = 'https://medium.com/@timpi';
const TIMPI_TG_URL = 'https://t.me/timpi';

const BIG_DIPPER_URL = 'https://bigdipper.live';

export const donateLink = {
  key: 'donate',
  url: '',
};

export const footerLinks = [
  {
    key: 'company',
    links: [
      {
        key: 'timpi',
        url: TIMPI_URL,
      },
      {
        key: 'stakeNow',
        url: TIMPI_STAKING_URL,
      },
      {
        key: 'contact',
        url: TIMPI_TG_URL,
      },
      {
        key: 'blog',
        url: TIMPI_MEDIUM_URL,
      },
    ],
  },
  {
    key: 'bigDipper',
    links: [
      {
        key: 'about',
        url: `${BIG_DIPPER_URL}/#about`,
      },
      {
        key: 'faq',
        url: `${BIG_DIPPER_URL}/faq`,
      },
      {
        key: 'termsAndConditions',
        url: `${BIG_DIPPER_URL}/terms-and-conditions`,
      },
      {
        key: 'privacyPolicy',
        url: `${BIG_DIPPER_URL}/privacy-policy`,
      },
    ],
  },
];
