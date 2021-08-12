import volvoXC4020211Default from 'url:./1.webp?width=480';
import volvoXC4020211s from 'url:./1.webp?as=avif&width=640';
import volvoXC4020211m from 'url:./1.webp?as=avif&width=1280';
import volvoXC4020211l from 'url:./1.webp?as=avif';

import volvoXC4020212Default from 'url:./2.webp?width=480';
import volvoXC4020212s from 'url:./2.webp?as=avif&width=640';
import volvoXC4020212m from 'url:./2.webp?as=avif&width=1280';
import volvoXC4020212l from 'url:./2.webp?as=avif';

import volvoXC4020213Default from 'url:./3.webp?width=480';
import volvoXC4020213s from 'url:./3.webp?as=avif&width=640';
import volvoXC4020213m from 'url:./3.webp?as=avif&width=1280';
import volvoXC4020213l from 'url:./3.webp?as=avif';

import volvoXC4020214Default from 'url:./4.webp?width=480';
import volvoXC4020214s from 'url:./4.webp?as=avif&width=640';
import volvoXC4020214m from 'url:./4.webp?as=avif&width=1280';
import volvoXC4020214l from 'url:./4.webp?as=avif';

import volvoXC4020215Default from 'url:./5.webp?width=480';
import volvoXC4020215s from 'url:./5.webp?as=avif&width=640';
import volvoXC4020215m from 'url:./5.webp?as=avif&width=1280';
import volvoXC4020215l from 'url:./5.webp?as=avif';

const images = [
  {
    name: 'left front side',
    defaultUrl: volvoXC4020211Default,
    sources: [
      { url: volvoXC4020211s, media: '(min-width: 480px)' },
      { url: volvoXC4020211m, media: '(min-width: 640px)' },
      { url: volvoXC4020211l, media: '(min-width: 1280px)' }
    ]
  },
  {
    name: 'right side',
    defaultUrl: volvoXC4020212Default,
    sources: [
      { url: volvoXC4020212s, media: '(min-width: 480px)' },
      { url: volvoXC4020212m, media: '(min-width: 640px)' },
      { url: volvoXC4020212l, media: '(min-width: 1280px)' }
    ]
  },
  {
    name: 'left back side',
    defaultUrl: volvoXC4020213Default,
    sources: [
      { url: volvoXC4020213s, media: '(min-width: 480px)' },
      { url: volvoXC4020213m, media: '(min-width: 640px)' },
      { url: volvoXC4020213l, media: '(min-width: 1280px)' }
    ]
  },
  {
    name: 'back side',
    defaultUrl: volvoXC4020214Default,
    sources: [
      { url: volvoXC4020214s, media: '(min-width: 480px)' },
      { url: volvoXC4020214m, media: '(min-width: 640px)' },
      { url: volvoXC4020214l, media: '(min-width: 1280px)' }
    ]
  },
  {
    name: 'front side',
    defaultUrl: volvoXC4020215Default,
    sources: [
      { url: volvoXC4020215s, media: '(min-width: 480px)' },
      { url: volvoXC4020215m, media: '(min-width: 640px)' },
      { url: volvoXC4020215l, media: '(min-width: 1280px)' }
    ]
  }
];

export default images;
