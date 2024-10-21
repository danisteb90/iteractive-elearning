"use client";

import { BarChart, Compass, Earth, Layout, List } from "lucide-react";
import SidebarItem from "./sidebar-item";
import { usePathname } from "next/navigation";

const guestRoutes = [
	{
		icon: Layout,
		label: "Dashboard",
		href: "/",
	},
	{
		icon: Compass,
		label: "Buscar",
		href: "/search",
	},
	{
		icon: Earth,
		label: "Menu Interactivo",
		href: "/interactive-menu",
	},
];

const teacherRoutes = [
	{
		icon: List,
		label: "Cursos",
		href: "/teacher/courses",
	},
	{
		icon: BarChart,
		label: "Analíticas",
		href: "/teacher/analytics",
	},
];

const SidebarRoutes = () => {
	const pathname = usePathname();
	const isTeacherPage = pathname?.includes("/teacher");

	const routes = isTeacherPage ? teacherRoutes : guestRoutes;

	return (
		<div className="flex flex-col w-full">
			{routes.map((route) => (
				<SidebarItem
					key={route.href}
					icon={route.icon}
					label={route.label}
					href={route.href}
				/>
			))}
		</div>
	);
};

export default SidebarRoutes;
