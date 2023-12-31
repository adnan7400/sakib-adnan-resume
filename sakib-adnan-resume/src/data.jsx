import {
    FaHome,
    FaUser,
    FaFolderOpen,
    FaEnvelopeOpen,
    FaBriefcase,
    FaGraduationCap,
    FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Theme1 from './assets/circle-blue.png'
import Theme2 from './assets/circle-red.png'
import Theme3 from './assets/circle-yellow.png'



export const links = [
    {
        id: 1,
        name: 'Home',
        icon: <FaHome className='nav__icon' />,
        path: '/'
    },
    {
        id: 2,
        name: 'About',
        icon: <FaUser className='nav__icon' />,
        path: '/about'
    },
    {
        id: 3,
        name: 'Project',
        icon: <FaFolderOpen className='nav__icon' />,
        path: '/project'
    },
    {
        id: 4,
        name: 'Contact',
        icon: <FaEnvelopeOpen className='nav__icon' />,
        path: '/contact'
    }
];

export const personalInfo = [
    
];

export const description = "I'm a Vancouver based Software engineer with a demonstrated history of implementing Payments Solutions services. In my current role, I am working in an agile development team to write Java, JavaScript, Typescript code for Enterprise Payment Processing services using Node.js, Express, Spring Boot and deploy products using Docker, Kubernetes, Rancher."