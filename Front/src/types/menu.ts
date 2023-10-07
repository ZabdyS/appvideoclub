import { DashboardIcon, Settings2Icon } from "vue-tabler-icons";

export interface menu {
  header?: string;
  title?: string;
  icon?: any;
  to?: string;
  divider?: boolean;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const menuItems: menu[] = [
  {
    title: 'Mantenimientos',
    icon: Settings2Icon,
    to: '#',
    children: [
    {
      title: 'Dashboard',
      icon: DashboardIcon,
      to: '/mantenimientos/idiomas'
    },
  ]
  }
];
export default menuItems;
