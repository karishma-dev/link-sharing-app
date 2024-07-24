"use client";
import { LinkIcon, ProfileIcon } from "@/assets/vectors";
import Button from "@/modules/common/components/Button";
import Logo from "@/modules/common/components/Logo";
import { logoutAPI } from "@/modules/onboarding/utilities/apiFunctions";
import Link from "next/link";

const Header = ({ selected }: { selected: number }) => {
	return (
		<header className='bg-white p-4 flex justify-between items-center'>
			<Logo />
			<div className='flex gap-3'>
				<Link
					href='/profile/links'
					className={`tab-button ${selected === 1 ? "selected" : ""}`}
				>
					<LinkIcon color={selected === 1 ? "#633CFF" : undefined} />
					Links
				</Link>
				<Link
					href='/profile/details'
					className={`tab-button ${selected === 2 ? "selected" : ""}`}
				>
					<ProfileIcon color={selected === 2 ? "#633CFF" : undefined} />
					Profile Details
				</Link>
			</div>
			<div className='flex gap-3'>
				<Button variant='secondary' link='/profile/preview' isLink>
					Preview
				</Button>
				<Button variant='primary' onClick={() => logoutAPI()}>
					Logout
				</Button>
			</div>
		</header>
	);
};

export default Header;
