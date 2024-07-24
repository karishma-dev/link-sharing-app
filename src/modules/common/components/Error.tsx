import { ErrorTriangle } from "@/assets/vectors";

const Error = ({ error }: { error: string }) => {
	return (
		<div className='text-sm text-magenta flex items-center gap-2 py-2 px-3 error-box font-medium'>
			<div className='w-4 h-4'>
				<ErrorTriangle />
			</div>
			<span>{error}</span>
		</div>
	);
};

export default Error;
