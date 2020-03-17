import uuid from 'uuid/v1';
import moment from 'moment';
import { colors } from '@material-ui/core';

import mock from 'utils/mock';

mock.onGet('/api/account/profile').reply(200, {
  profile: {
    avatar: '/images/avatars/avatar_lvzhihao.jpg',
    canHire: false,
    country: '法国',
    email: 'shen.zhi@devias.io',
    firstName: 'Zhihao',
    isPublic: true,
    lastName: 'Lyu',
    phone: '+40 777666555',
    state: '巴黎地区',
    timezone: '4:32PM (GMT-4)'
  }
});

mock.onGet('/api/account/statistics').reply(200, {
  statistics: {
    bookmarked: '43',
    applied: '13',
    inProgress: '7',
    archieved: '5'
  }
});


mock.onGet('/api/account/notifications').reply(200, {
  notifications: [
    {
      id: uuid(),
      title: '您申请的职位 施耐德 软件工程师 已提交成功。',
      type: 'order',
      created_at: moment().subtract(2, 'hours')
    },
    {
      id: uuid(),
      title: '您申请的职位 中建阿尔及利亚 售前工程师 已处理。',
      type: 'user',
      created_at: moment().subtract(1, 'day')
    },
    {
      id: uuid(),
      title: '您申请的职位 中建阿尔及利亚 建筑师 已关闭。',
      type: 'job',
      created_at: moment().subtract(3, 'days')
    },
    {
      id: uuid(),
      title: '您申请的职位 小米法国 解决方案工程师 已处理。',
      type: 'feature',
      created_at: moment().subtract(7, 'days')
    }
  ]
});

mock.onGet('/api/account/subscription').reply(200, {
  subscription: {
    name: 'Freelancer',
    salary: '5',
    currency: '$',
    proposalsLeft: 12,
    templatesLeft: 5,
    invitesLeft: 24,
    adsLeft: 10,
    hasAnalytics: true,
    hasEmailAlerts: true
  }
});

mock.onGet('/api/account/settings').reply(200, {
  settings: {}
});


// mock.onGet('/api/account/todos').reply(200, {
//   todos: [
//     {
//       id: uuid(),
//       title: 'Finish the proposal design and contract for the client ASAP',
//       deadline: moment().subtract(2, 'days'),
//       done: false
//     },
//     {
//       id: uuid(),
//       title: 'Finish the proposal design and contract for the client ASAP',
//       deadline: moment(),
//       done: false
//     },
//     {
//       id: uuid(),
//       title:
//         'Upload the files for the client @Adrian Stefan with the fonts, assets exported and all the fancy svgs',
//       deadline: moment().add(2, 'days'),
//       done: false
//     },
//     {
//       id: uuid(),
//       title: 'Re-write the card component with hooks and context',
//       deadline: moment().add(5, 'days'),
//       done: false
//     },
//     {
//       id: uuid(),
//       title: 'Send proposal for the fintech job',
//       deadline: moment().add(5, 'days'),
//       done: false
//     },
//     {
//       id: uuid(),
//       title:
//         'Create todo app with react hooks just to get a better understanding of the concept',
//       deadline: moment().add(7, 'days'),
//       done: true
//     }
//   ]
// });