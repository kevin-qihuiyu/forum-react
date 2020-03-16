import uuid from 'uuid/v1';
import moment from 'moment';
import { colors } from '@material-ui/core';

import mock from 'utils/mock';

mock.onGet('/api/users').reply(200, {
  users: []
});

mock.onGet('/api/users/1/files').reply(200, {
  files: [
    {
      id: uuid(),
      name: '项目经理.pdf',
      url: '#',
      mimeType: 'application/pdf',
      size: 1024 * 1024 * 3.45
    },
    {
      id: uuid(),
      name: '产品经理.png',
      url: '/images/projects/project_1.jpg',
      mimeType: 'image/png',
      size: 1024 * 1024 * 1.78
    }
  ],
})

mock.onGet('/api/users/1/appliedJobs').reply(200, {
  jobs: [
    {
      id: uuid(),
      title: '证券研究员(量化方向)',
      author: {
        name: 'Devias Investments',
        avatar: ''
      },
      salary: '17-25万',
      currency: '$',
      type: 'Full-Time',
      location: '法国巴黎',
      updated_at: moment().subtract(16, 'hour')
    },
    {
      id: uuid(),
      title: '项目经理助理',
      salary: '7K - 9K',
      currency: '$',
      type: 'Full-Time',
      location: '中国深圳',
      author: {
        name: '小米中国',
        avatar: '/images/avatars/xiaomi.png'
      },
      // tags: [
      //   {
      //     id: uuid(),
      //     text: 'Vue JS',
      //     color: colors.green[600]
      //   }
      // ],
      updated_at: moment().subtract(24, 'minutes')
    }
  ]
});

mock.onGet('/api/users/1/bookmarkedJobs').reply(200, {
  jobs: [
    {
      id: uuid(),
      title: '初级风控管理分析师',
      author: {
        name: 'Devias Investment',
        avatar: ''
      },
      salary: '15-18万',
      currency: '$',
      type: 'Full-Time',
      location: '法国巴黎',
      // tags: [
      //   {
      //     text: 'Example tag',
      //     color: colors.indigo[600]
      //   }
      // ],
      updated_at: moment().subtract(1, 'hour')
    },
    {
      id: uuid(),
      title: '项目经理助理',
      author: {
        name: '中建阿尔及利亚',
        avatar: '/images/avatars/cscec.png'
      },
      salary: '17-30万',
      currency: '$',
      type: 'Full-Time',
      location: '阿尔及利亚',
      updated_at: moment().subtract(24, 'minutes')
    },
    {
      id: uuid(),
      title: '客户经理',
      salary: '7K - 9K',
      currency: '$',
      type: 'Full-Time',
      location: '中国深圳',
      author: {
        name: '小米中国',
        avatar: '/images/avatars/xiaomi.png'
      },
      updated_at: moment().subtract(24, 'minutes')
    }
  ]
});
