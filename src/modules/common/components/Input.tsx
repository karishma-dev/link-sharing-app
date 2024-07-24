import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "../../../assets/vectors";

const Input = ({
	label,
	type,
	id,
	isTouched,
	error,
	...props
}: {
	label: string;
	type: string;
	id: string;
	isTouched: boolean | undefined;
	error: string | undefined;
	[key: string]: any;
}) => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className={`form-group ${isTouched && error ? "has-error" : ""}`}>
			<label htmlFor={id}>{label}</label>

			{type === "password" ? (
				<div className='relative'>
					<input
						type={showPassword ? "text" : "password"}
						{...props}
						id={id}
						className='w-full input'
					/>
					<button
						aria-label='toggle password visibility'
						onClick={() => setShowPassword((show) => !show)}
						type='button'
						className='absolute right-4 top-1/2 -translate-y-1/2'
					>
						{showPassword ? <EyeIcon /> : <EyeOffIcon />}
					</button>
				</div>
			) : (
				<input {...props} id={id} className='input' />
			)}
			{isTouched && error && <div className='body-small text-red'>{error}</div>}
		</div>
	);
};

export default Input;
