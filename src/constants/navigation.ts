import { GraduationCapIcon, User2Icon } from "lucide-react";

export const sideNavigation = [
  {
    name: "Diplomas",
    url: "/subjects",
    icon: GraduationCapIcon,
  },
  {
    name: "Account Settings",
    url: "/account",
    icon: User2Icon,
  },
];

export const dashboardRoutes = {
  subjects: {
    name: "Subjects",
    icon: GraduationCapIcon,
  },
  account: {
    name: "Account",
    icon: User2Icon,
  },
};
