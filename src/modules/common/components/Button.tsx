import Loading from "@/modules/common/components/Loading";
import Link from "next/link";

const Button = ({
	children,
	variant,
	disabled = false,
	width = "fit",
	text = "base",
	weight = "semibold",
	loading,
	isLink = false,
	link = "",
	...props
}: {
	children: React.ReactNode;
	variant: "primary" | "secondary";
	disabled?: boolean;
	width?: string;
	weight?: string;
	loading?: boolean;
	isLink?: boolean;
	link?: string;
	[key: string]: any;
}) => {
	let className = `px-4 py-2 rounded-md flex justify-center items-center gap-2 heading-small w-${width} font-${weight} button-${variant} ${
		loading ? "loading" : ""
	} ${disabled ? "opacity-25" : ""}`;
	return isLink ? (
		<Link href={link} className={className} {...props}>
			{children}
		</Link>
	) : (
		<button {...props} className={className} disabled={disabled}>
			{loading ? <Loading size='sm' /> : children}
		</button>
	);
};

export default Button;
