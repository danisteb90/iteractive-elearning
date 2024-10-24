import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface SidebarItemProps {
	icon: LucideIcon;
	label: string;
	href: string;
}

const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
	const pathname = usePathname();
	const router = useRouter();

	const isActive =
		(pathname === "/" && href === "/") ||
		pathname === href ||
		pathname.startsWith(`${href}/`); //TODO: Revisar esto luego por si la ruta "/" cambia, a veces la plataforma puede estar dentro de una carpeta

	const onClick = () => router.push(href);

	return (
		<button
			onClick={onClick}
			type="button"
			className={cn(
				"flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-600/20",
				isActive &&
					"text-blue-800 bg-blue-500/20 hover:bg-blue-800/20 hover:text-blue-900"
			)}
		>
			<div className="flex items-center gap-x-2 py-4">
				<Icon
					size={22}
					className={cn("text-slate-500", isActive && "text-blue-800")}
				/>
				{label}
			</div>
			<div
				className={cn(
					"ml-auto opacity-0 border-2 border-blue-800 h-full transition-all",
					isActive && "opacity-100"
				)}
			/>
		</button>
	);
};

export default SidebarItem;
