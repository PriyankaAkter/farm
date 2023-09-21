

import { SideBar } from "./components/layout/slideBar/SideBar";


export default function RootLayout({ children }) {
  return (
    <div className="flex">
    <SideBar />
    <div className="flex-1">{children}</div>
  </div>
  );
}
