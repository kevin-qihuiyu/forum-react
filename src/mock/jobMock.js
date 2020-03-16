import uuid from 'uuid/v1';
import moment from 'moment';
import { colors } from '@material-ui/core';

import mock from 'utils/mock';

mock.onGet('/api/jobs').reply(200, {
  jobs: [
    {
      id: uuid(),
      title: '土建工程师',
      author: {
        name: '中建阿尔及利亚',
        avatar: '/images/avatars/cscec.png'
      },
      salary: '面议',
      currency: '$',
      type: 'Full-Time',
      location: '阿尔及利亚',
      status: '已投递',
      members: 5,
      tags: [
        {
          text: 'Angular JS',
          color: colors.red[600]
        }
      ],
      start_date: moment(),
      end_date: moment(),
      updated_at: moment().subtract(24, 'minutes')
    },
    {
      id: uuid(),
      title: '给排水工程师',
      author: {
        name: '中建阿尔及利亚',
        avatar: '/images/avatars/cscec.png'
      },
      salary: '面议',
      currency: '$',
      type: 'Full-Time',
      location: 'Europe',
      status: '已投递',
      members: 3,
      tags: [
        {
          text: 'HTML & CSS',
          color: colors.grey[600]
        }
      ],
      start_date: moment(),
      end_date: moment(),
      updated_at: moment().subtract(1, 'hour')
    },
    {
      id: uuid(),
      title: '机电工程师',
      author: {
        name: '中建阿尔及利亚',
        avatar: '/images/avatars/cscec.png'
      },
      salary: '面议',
      currency: '$',
      type: 'Full-Time',
      location: 'Europe',
      status: '已投递',
      members: 8,
      tags: [
        {
          text: 'React JS',
          color: colors.indigo[600]
        }
      ],
      start_date: moment(),
      end_date: moment(),
      updated_at: moment().subtract(16, 'hour')
    },
    {
      id: uuid(),
      title: '应用开发工程师',
      author: {
        name: '施耐德电气',
        avatar: '/images/avatars/schneider.png'
      },
      salary: '15-25万/年',
      currency: '$',
      type: 'Full-Time',
      location: 'Europe',
      status: '已投递',
      members: 10,
      tags: [
        {
          text: 'Vue JS',
          color: colors.green[600]
        }
      ],
      start_date: moment(),
      end_date: moment(),
      updated_at: moment().subtract(3, 'days')
    },
    {
      id: uuid(),
      title: '解决方案项目工程师',
      author: {
        name: '施耐德电气',
        avatar: '/images/avatars/schneider.png'
      },
      salary: '15-25万/年',
      currency: '$',
      type: 'Full-Time',
      location: 'Europe',
      status: '职位关闭',
      members: 2,
      tags: [
        {
          text: 'Angular JS',
          color: colors.red[600]
        },
        {
          text: 'HTML & CSS',
          color: colors.grey[600]
        }
      ],
      start_date: moment(),
      end_date: moment(),
      updated_at: moment().subtract(7, 'days')
    },
    {
      id: uuid(),
      title: '物联网业务经理',
      author: {
        name: '小米法国',
        avatar: '/images/avatars/xiaomi.png'
      },
      salary: '面议',
      currency: '$',
      type: 'Full-Time',
      location: 'Europe',
      status: '已投递',
      members: 12,
      tags: [
        {
          text: 'Vue JS',
          color: colors.green[600]
        }
      ],
      start_date: moment(),
      end_date: moment(),
      updated_at: moment().subtract(8, 'days')
    }
  ]
});

mock.onGet('/api/jobs/1').reply(200, {
  job: {
    title: 'ERP财务应用开发工程师',
    author: {
      name: '小米法国',
      avatar: '/images/avatars/xiaomi.png',
      bio: 'We build beautiful functional themes for web professionals'
    },
    brief: `
#### 岗位职责：

1. 负责公司信息技术项目的需求调研、分析、设计、验证；在整个项目生命周期过程中，维护跟踪需求，根据相关流程处理需求变更。

2. 负责与用户沟通，收集用户需求，确定需求边界，分析并制定有效的需求方案。

3. 负责ERP中核算功能方案设计、系统开发、实现和上线工作

4. 负责资金管理系统方案设计、系统开发、实现和上线工作

5. 负责ERP系统与金融机构对接的接口设计

#### 任职要求：

1、本科以上学历，财务或信管等相关专业毕业，

2、熟悉企业资金管理业务和流程，有资金管理系统自研或套装软件经验

3、5年以上SAP或资金产品经理经验，熟悉SAP产品且至少熟悉SAP FI模块

4、熟悉金融企业的核算、清结算的业务流程，有金融企业IT项目经验优先。

5、有较强的自主学习能力，能够积极面对新任务带来的挑战；

6、有良好的沟通能力与团队合作意识

7、态度积极主动，具备较强的工作压力承受能力

    `,
    salary: '25-35万',
    currency: 'CNY',
    tags: [
      {
        text: '信息技术',
        color: colors.indigo[600]
      }
    ],
    members: [
      {
        id: uuid(),
        name: 'Ekaterina Tankova',
        avatar: '/images/avatars/avatar_2.png',
        bio: 'Front End Developer'
      },
      {
        id: uuid(),
        name: 'Cao Yu',
        avatar: '/images/avatars/avatar_3.png',
        bio: 'UX Designer'
      },
      {
        id: uuid(),
        name: 'Anje Keizer',
        avatar: '/images/avatars/avatar_5.png',
        bio: 'Copyright'
      }
    ],
    files: [
      // {
      //   id: uuid(),
      //   name: 'example-project1.jpg',
      //   url: '/images/jobs/project_2.jpg',
      //   mimeType: 'image/png',
      //   size: 1024 * 1024 * 3
      // },
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
    activities: [
      {
        id: uuid(),
        subject: 'Project owner',
        subject_type: 'user',
        action_type: 'upload_file',
        action_desc: 'has uploaded a new file',
        created_at: moment().subtract(23, 'minutes')
      },
      {
        id: uuid(),
        subject: 'Adrian Stefan',
        subject_type: 'user',
        action_type: 'join_team',
        action_desc: 'joined team as a Front-End Developer',
        created_at: moment().subtract(2, 'hours')
      },
      {
        id: uuid(),
        subject: 'Alexandru Robert',
        action_type: 'join_team',
        action_desc: 'joined team as a Full Stack Developer',
        created_at: moment().subtract(9, 'hours')
      },
      {
        id: uuid(),
        subject: 'Project owner',
        subject_type: 'user',
        action_type: 'salary_change',
        action_desc: 'raised the job budget',
        created_at: moment().subtract(2, 'days')
      },
      {
        id: uuid(),
        subject: 'Contest',
        subject_type: 'job',
        action_type: 'contest_created',
        action_desc: 'created',
        created_at: moment().subtract(4, 'days')
      }
    ],
    subscribers: [
      {
        id: uuid(),
        name: 'Ekaterina Tankova',
        avatar: '/images/avatars/avatar_2.png',
        cover: '/images/covers/cover_1.jpg',
        common_connections: 12,
        labels: [
          'User Experience',
          'FrontEnd development',
          'HTML5',
          'VueJS',
          'ReactJS'
        ]
      },
      {
        id: uuid(),
        name: 'Cao Yu',
        avatar: '/images/avatars/avatar_3.png',
        cover: '/images/covers/cover_2.jpg',
        common_connections: 5,
        labels: [
          'User Interface',
          'FullStack development',
          'Angular',
          'ExpressJS'
        ]
      },
      {
        id: uuid(),
        name: 'Clarke Gillebert',
        avatar: '/images/avatars/avatar_6.png',
        cover: '/images/covers/cover_2.jpg',
        common_connections: 17,
        labels: ['BackEnd development', 'Firebase', 'MongoDB', 'ExpressJS']
      }
    ],
    deadline: moment().add(7, 'days'),
    updated_at: moment().subtract(23, 'minutes')
  }
});
