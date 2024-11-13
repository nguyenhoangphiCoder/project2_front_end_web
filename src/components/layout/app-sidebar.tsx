import {
  Calendar,
  ChevronsUpDown,
  Home,
  Inbox,
  LogOut,
  Search,
  Settings,
} from "lucide-react";
import { FiUser } from "react-icons/fi";
import { TbCategoryPlus } from "react-icons/tb";
import { FiCoffee } from "react-icons/fi";
import { TbCurrencyFrank } from "react-icons/tb";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuthStore } from "@/store/useAuthStore";
import { useToastMessage } from "@/hooks/useToastMessage";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Users",
    url: "/users",
    icon: FiUser,
  },
  {
    title: "Categories",
    url: "/categories",
    icon: TbCategoryPlus,
  },
  {
    title: "Franchises",
    url: "/franchises",
    icon: TbCurrencyFrank,
  },
  {
    title: "Products",
    url: "/products",
    icon: FiCoffee,
  },
  {
    title: "Orders",
    url: "/orders",
    icon: IoBagCheckOutline,
  },
];

export function AppSidebar() {
  const { setIsAuth } = useAuthStore();
  const navigate = useNavigate();
  const { toastSuccess } = useToastMessage();

  function handleLogout() {
    setIsAuth(false, 0);
    toastSuccess("Log out successs");
    navigate("/login");
  }
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Shop Coffee</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarFallback className="rounded-lg">
                      <FaUser />
                    </AvatarFallback>
                  </Avatar>
                  <ChevronsUpDown className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side="bottom"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
