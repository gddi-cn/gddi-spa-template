import DashboardIcon from '@mui/icons-material/DashboardOutlined'
import BugReportIcon from '@mui/icons-material/BugReportOutlined'
import PersonIcon from '@mui/icons-material/Person2Outlined';
import GroupIcon from '@mui/icons-material/PeopleAltOutlined';

import { Paths } from '@/shared/enums/paths'


const menuList: Array<Menu.Instance> = [
  {
    id: '0x00000001',
    label: '仪表盘',
    icon: <DashboardIcon />,
    path: Paths.Layout.DASHBOARD,
  },
  {
    id: '0c00000010',
    label: '用户',
    children: [
      {
        label: '用户管理',
        icon: <PersonIcon />,
        path: 'user'
      },
      {
        label: '群组管理',
        icon: <GroupIcon />,
        path: 'group',
      }
    ],
  },
  {
    id: '0x10000000',
    label: '测试',
    icon: <BugReportIcon />,
    path: Paths.Layout.TEST,
  },
]

export default menuList

