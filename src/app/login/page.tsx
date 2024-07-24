import MainBox from "@/modules/onboarding/components/MainBox";
import Form from "@/modules/onboarding/components/login/Form";

const Page = () => {
	return (
		<MainBox
			title='Login'
			subtitle='Add your details below to get back into the app'
			ctaText='Don’t have an account?'
			ctaLink='/signup'
			ctaLinkText='Create account'
		>
			<Form />
		</MainBox>
	);
};

export default Page;
