import Logo from "./logo";
import SidebarRoutes from "./sidebar-routes";

const Sidebar = () => {
	return (
		<div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
			<div className="p-[10px] w-full flex items-center gap-[8px]">
				<Logo />
			</div>
			<div className="flex flex-col w-full">
				<SidebarRoutes />
			</div>
		</div>
	);
};

export default Sidebar;
