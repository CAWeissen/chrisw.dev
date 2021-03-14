import { createRef } from 'react'

export const projectData = [
  {
    name: 'Pepsi Cares',
    date: 'February 2019',
    url: 'https://www.pepsicares.com',
    image: '/assets/img/projects/pepsi-cares.jpg',
    video: '/assets/video/pepsicares.webm'
  },
  {
    name: 'Seagate',
    date: 'August 2020',
    url: 'https://www.seagate.com',
    image: '/assets/img/projects/seagate.jpg',
    video: '/assets/video/seagate.webm'
  },
  {
    name: 'Union',
    date: 'February 2019',
    url: 'https://union.co',
    image: '/assets/img/projects/union.jpg',
    video: '/assets/video/union.webm'
  },
  {
    name: 'Charlotte\'s Got a Lot',
    date: 'February 2019',
    url: 'https://www.charlottesgotalot.com',
    image: '/assets/img/projects/charlottesgotalot-trails.jpg',
    video: '/assets/video/crva-trails.webm'
  },
  {
    name: 'CRBA',
    date: 'October 2019',
    url: 'https://www.charlotteregion.com',
    image: '/assets/img/projects/crba.jpg',
    video: '/assets/video/crba.webm'
  },
  {
    name: 'Channel Prime Alliance',
    date: 'February 2020',
    url: 'https://www.channelpa.com',
    image: '/assets/img/projects/channelpa.jpg',
    video: '/assets/video/channelpa.webm'
  },
]

export const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Design Systems',
  'React',
  'Vue',
  'Angular',
  'React Native',
  'three.js',
  'PHP',
  'Node.js',
  'GraphQL',
  'Augmented Reality',
  'Virtual Reality',
  'Game Development',
  '3D Modeling',
  'Photoshop',
  'Illustrator',
  'Photography',
  'Videography',
  'Photo/Video Editing',
  'Spanish'
]

export const gallery = [
  {
    src: './assets/img/DSC00493.jpg',
    width: 3,
    height: 2,
    url: 'https://www.instagram.com/p/B3S7TknHlCr/'
  },
  {
    src: './assets/img/DSC01472.jpg',
    width: 3,
    height: 2,
    url: 'https://www.instagram.com/p/B3iTQByBNXE/'
  },
  {
    src: './assets/img/DSC01004.jpg',
    width: 3,
    height: 2,
    url: 'https://www.instagram.com/p/CHEr_-VsYOp/',
  },
  {
    src: './assets/img/DSC01948.jpg',
    width: 3,
    height: 2,
    url: 'https://www.instagram.com/p/CHfk7J1hons/'
  },
  {
    src: './assets/img/DSC01487.jpg',
    width: 3,
    height: 2,
    url: 'https://www.instagram.com/p/CITYm4vjpiS/'
  },
  {
    src: './assets/img/IMG_6948.jpg',
    width: 3,
    height: 2
  },
  {
    src: './assets/img/IMG_6713.jpg',
    width: 3,
    height: 2
  },
  {
    src: './assets/img/IMG_5598.jpg',
    width: 2,
    height: 3
  },
  {
    src: './assets/img/IMG_7482.jpg',
    width: 3,
    height: 2
  },
  {
    src: './assets/img/DSC09888.jpg',
    width: 2,
    height: 3
  },
  {
    src: './assets/img/DSC00285.jpg',
    width: 3,
    height: 2
  },
  {
    src: './assets/img/DSC00091.jpg',
    width: 3,
    height: 2,
    url: 'https://www.instagram.com/p/B3QdGMxH6jo/'
  },
];

export const state = {
  sections: 5,
  pages: 3,
  zoom: 1,
  top: createRef()
}
