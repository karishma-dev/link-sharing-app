import Logo from "@/modules/common/components/Logo";
import Link from "next/link";

const MainBox = ({
	title,
	subtitle,
	ctaText,
	ctaLink,
	ctaLinkText,
	children,
}: {
	title: string;
	subtitle: string;
	ctaText: string;
	ctaLink: string;
	ctaLinkText: string;
	children: React.ReactNode;
}) => {
	return (
		<main className='flex flex-col justify-center items-center gap-12 h-screen max-w-md mx-auto'>
			<Logo />
			<div className='bg-white p-10 w-full'>
				<div className='mb-8'>
					<h1 className='heading-medium mb-1'>{title}</h1>
					<span className='body-medium'>{subtitle}</span>
				</div>
				{children}
				<div className='mt-6 body-medium text-center'>
					{ctaText}{" "}
					<Link href={ctaLink} className='text-purple'>
						{ctaLinkText}
					</Link>
				</div>
			</div>
		</main>
	);
};

export default MainBox;
