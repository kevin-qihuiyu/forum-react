/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import BarChartIcon from '@material-ui/icons/BarChart';
import FolderIcon from '@material-ui/icons/FolderOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';


export default [
  {
    title: 'Pages',
    pages: [
      {
        title: '首页',
        href: '/overview',
        icon: HomeIcon
      },
      {
        title: '个人主页',
        href: '/profile',
        icon: PersonIcon,
        children: [
          {
            title: '个人信息',
            href: '/profile/1/general'
          },
          {
            title: '简历管理',
            href: '/profile/1/cv'
          },
          {
            title: '收藏的职位',
            href: '/profile/1/favoriteJobs'
          },
          {
            title: '投递过的职位',
            href: '/profile/1/appliedJobs'
          },
        ]
      },
      {
        title: '浏览职位',
        href: '/jobs',
        icon: FolderIcon,
        children: [
          {
            title: '浏览职位',
            href: '/jobs'
          },
          {
            title: '职位简介',
            href: '/jobs/1/overview'
          },
          {
            title: '公司简介',
            href: '/jobs/1/files'
          },
          {
            title: '招聘流程',
            href: '/jobs/1/activity'
          },
          {
            title: 'Create （企业）',
            href: '/jobs/create'
          },
          // {
          //   title: 'Subscribers',
          //   href: '/jobs/1/subscribers'
          // }
        ]
      },
      {
        title: '管理投递',
        href: '/management',
        icon: BarChartIcon,
        children: [
          {
            title: '已收藏的职位',
            href: '/management/bookmarkedJobs'
          },
          {
            title: '已投递的职位',
            href: '/management/appliedJobs'
          }
        ]
      },
      {
        title: 'Social Feed',
        href: '/social-feed',
        icon: PeopleIcon
      },
      {
        title: '设置',
        href: '/settings',
        icon: SettingsIcon,
        children: [
          {
            title: 'General',
            href: '/settings/general'
          },
          {
            title: 'Subscription',
            href: '/settings/subscription'
          },
          {
            title: 'Notifications',
            href: '/settings/notifications'
          },
          {
            title: 'Security',
            href: '/settings/security'
          }
        ]
      }
    ]
  }
];
