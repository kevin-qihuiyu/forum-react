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
        title: 'Overview',
        href: '/overview',
        icon: HomeIcon
      },
      {
        title: 'My Profile',
        href: '/profile',
        icon: PersonIcon,
        children: [
          {
            title: 'Timeline',
            href: '/profile/1/timeline'
          },
          {
            title: 'Connections',
            href: '/profile/1/connections'
          },
          {
            title: 'Projects',
            href: '/profile/1/projects'
          },
          {
            title: 'Reviews',
            href: '/profile/1/reviews'
          }
        ]
      },
      {
        title: 'Jobs',
        href: '/projects',
        icon: FolderIcon,
        children: [
          {
            title: 'Browse',
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
        title: 'Management',
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
        title: 'Settings',
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
