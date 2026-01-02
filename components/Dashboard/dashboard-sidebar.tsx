import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarFooter,
  SidebarGroupLabel,
} from "../ui/sidebar";
import { MdOutlineDashboard } from "react-icons/md";
import { TbUsers } from "react-icons/tb";
import { IoBarChartSharp } from "react-icons/io5";
import { TbReportSearch } from "react-icons/tb";
import { CiLogout } from "react-icons/ci";
import Link from "next/link";

const DashboardSidebar = () => {
  return (
    <>
      <Sidebar>
        <SidebarHeader>
          <h2 className="text-lg font-semibold">Ebaque</h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <Link
              href="/dashboard"
              className="flex items-center transition-colors transform hover:bg-gray-200 px-2 py-2 rounded-md"
            >
              <MdOutlineDashboard className="mr-2" />
              <span>Dashboard</span>
            </Link>

            <Link
              href="/classes"
              className="flex items-center transition-colors transform hover:bg-gray-200 px-2 py-2 rounded-md"
            >
              <TbUsers className="mr-2" />
              <span>Turmas</span>
            </Link>

            <Link
              href="/graphics"
              className="flex items-center transition-colors transform hover:bg-gray-200 px-2 py-2 rounded-md"
            >
              <IoBarChartSharp className="mr-2" />
              <span>Gráficos</span>
            </Link>

            <Link
              href="/reports"
              className="flex items-center transition-colors transform hover:bg-gray-200 px-2 py-2 rounded-md"
            >
              <TbReportSearch className="mr-2" />
              <span>Relatórios</span>
            </Link>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <div className="flex items-center p-2">
            <CiLogout className="mr-2" />
            <span>Sair</span>
          </div>
        </SidebarFooter>
      </Sidebar>
    </>
  );
};
export default DashboardSidebar;
