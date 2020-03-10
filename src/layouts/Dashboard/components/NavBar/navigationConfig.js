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
            href: '/profile/1/projects'
          },
          {
            title: '投递过的职位',
            href: '/profile/1/projects'
          },
        ]
      },
      {
        title: '浏览职位',
        href: '/projects',
        icon: FolderIcon,
        children: [
          {
            title: '浏览职位',
            href: '/projects'
          },
          {
            title: 'Create',
            href: '/projects/create'
          },
          {
            title: '职位简介',
            href: '/projects/1/overview'
          },
          {
            title: '公司简介',
            href: '/projects/1/files'
          },
          {
            title: '招聘流程',
            href: '/projects/1/activity'
          },
          // {
          //   title: 'Subscribers',
          //   href: '/projects/1/subscribers'
          // }
        ]
      },
      {
        title: '管理投递',
        href: '/management',
        icon: BarChartIcon,
        children: [
          {
            title: 'Customers',
            href: '/management/customers'
          },
          {
            title: 'Customer Details',
            href: '/management/customers/1/summary'
          },
          {
            title: 'Projects',
            href: '/management/projects'
          },
          {
            title: 'Orders',
            href: '/management/orders'
          },
          {
            title: 'Order Details',
            href: '/management/orders/1'
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
