import Link from "next/link";
import { Logo as LogoIcon } from "@/assets/vectors";

const Logo = () => {
	return (
		<Link href={"/"} aria-label='Link Sharing App' title='Link Sharing App'>
			<LogoIcon />
		</Link>
	);
};

export default Logo;
