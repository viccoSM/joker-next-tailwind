import {ReactNode} from "react";

type itemSidebarType = {
  id: string,
  name: string,
  path?: string,
  icon?: string | ReactNode,
}

interface pathSidebarType extends itemSidebarType{
  active?: string[],
  children?: itemSidebarType[]
}

export const navigationSidebar: pathSidebarType[] = [
  {
    id: 'dashboard',
    name: 'Dashboard',
    path: '/dashboard',
    active: ['/dashboard']
  },
  {
    id: 'form',
    name: 'Form',
    active: [
      '/form/input',
      '/form/toast'
    ],
    children: [
      {
        id: 'formInput',
        name: 'Inputs',
        path: '/form/input'
      },
      {
        id: 'formToast',
        name: 'Toast',
        path: '/form/toast'
      },
    ]
  },
]