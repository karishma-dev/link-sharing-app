import MainBox from "@/modules/onboarding/components/MainBox";
import Form from "@/modules/onboarding/components/signup/Form";

const Page = () => {
	return (
		<MainBox
			title='Create account'
			subtitle='Let’s get you started sharing your links!'
			ctaText='Already have an account?'
			ctaLink='/login'
			ctaLinkText='Login'
		>
			<Form />
		</MainBox>
	);
};

export default Page;
