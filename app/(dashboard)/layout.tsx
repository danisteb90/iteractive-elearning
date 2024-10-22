import MobileSidebar from "./_components/mobile-sidebar";
import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="h-screen">
			<div className="h-[80px] fixed inset-y-0 w-full z-50">
				<Navbar />
			</div>
			<div className="hidden md:flex h-full w-64 flex-col fixed inset-y-0 z-50">
				<Sidebar />
			</div>
			<main className="pt-[80px] h-full md:pl-64">{children}</main>
		</div>
	);
};

export default DashboardLayout;
