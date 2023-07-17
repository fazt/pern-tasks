import {MdTaskAlt} from 'react-icons/md'
import {BiTask, BiUserCircle} from 'react-icons/bi'

export const publicRoutes = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Login",
    path: "/login",
  },
  {
    name: "Register",
    path: "/register",
  },
]

export const privateRoutes = [
  {
    name: "Tasks",
    path: "/tasks",
    icon: <BiTask className='w-5 h-5' />,
  },
  {
    name: "Add",
    path: "/tasks/new",
    icon: <MdTaskAlt className='w-5 h-5' />,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <BiUserCircle className='w-5 h-5' />,
  },
];