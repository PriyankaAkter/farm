
import { AiOutlineHome } from 'react-icons/ai'
import { BsDatabase,BsFillPersonFill,BsHandbag } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { RiCoupon5Line } from 'react-icons/ri'
export const navbarData = [
    {
      id: 1,
      name: "Dashboard",
      icon: <AiOutlineHome className="text-primary w-5 h-5 hover:text-secondary" />,
      href: "/dashboard"
      
    },
    {
        id: 2,
        name: "Products",
        icon: <BsDatabase className="text-primary w-5 h-5 hover:text-secondary" />,
        href: "/dashboard/products"
        
    },
    {
        id: 3,
        name: "Orders",
        icon: <BsHandbag className="text-primary w-5 h-5 hover:text-secondary" />,
        href: "/dashboard/orders"
        
      },
      {
          id: 4,
          name: "Customers",
          icon: <BsFillPersonFill className="text-primary w-5 h-5 hover:text-secondary" />,
          href: "/dashboard/customers"
          
      },
      {
        id: 5,
        name: "Coupons",
        icon: <RiCoupon5Line className="text-primary w-5 h-5 hover:text-secondary" />,
        href: "/dashboard/coupons"
        
      },
      {
          id: 6,
          name: "Categories",
          icon: <AiOutlineHome className="text-primary w-5 h-5 hover:text-secondary" />,
          href: "/dashboard/categories"
          
      },
      {
        id: 7,
        name: "Settings",
        icon: <FiSettings className="text-primary w-5 h-5 hover:text-secondary" />,
        href: "/dashboard/settings"
        
    },
]