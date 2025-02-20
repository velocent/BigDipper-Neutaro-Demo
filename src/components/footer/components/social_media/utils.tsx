import React from 'react';
import {
  TelegramIcon,
  LinkedinIcon,
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
} from '@icons';

export const socialMediaLinks:{
  component: React.ReactNode;
  className: string;
  url: string;
}[] = [
  {
    component: <TelegramIcon />,
    className: 'telegram',
    url: 'https://t.me/ntmpi',
  },
  {
    component: <DiscordIcon />,
    className: 'linkedin',
    url: 'https://dsc.gg/ntmpi',
  },
  {
    component: <TwitterIcon />,
    className: 'twitter',
    url: 'https://twitter.com/ntmpi',
  },
  {
    component: <GithubIcon />,
    className: 'github',
    url: 'https://github.com/neutaro',
  },
];
