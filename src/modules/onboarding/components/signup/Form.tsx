"use client";
import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "@/modules/common/components/Button";
import Input from "@/modules/common/components/Input";
import { useState } from "react";
import Error from "@/modules/common/components/Error";
import STRINGS from "@/modules/common/utils/String";
import { signUpApi } from "@/modules/onboarding/utilities/apiFunctions";

type FormData = {
	email: string;
	password: string;
	confirmPassword: string;
};

const Form = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const handleSubmitForm = async (formData: FormData) => {
		setLoading(true);
		setError("");
		const res = await signUpApi(formData);
		if (res.success) {
		}
		// const res = await loginAPI(formData);
		// if (res.success) {
		// 	if (res.data) {
		// 		let data = res.data;
		// 		let user = data?.user;
		// 		let token = res.token;

		// 		if (user && token) {
		// 			localStorage.setItem("token", token);
		// 			setUser({
		// 				user: user,
		// 				token: token,
		// 			});
		// 			navigate("/dashboard");
		// 		}
		// 	}
		// } else {
		// 	setError(res.message);
		// }
		setLoading(false);
	};

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
			confirmPassword: "",
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email(STRINGS.errors.invalidEmail)
				.required(STRINGS.errors.required),
			password: Yup.string().required(STRINGS.errors.required),
			confirmPassword: Yup.string().required(STRINGS.errors.required),
		}),
		onSubmit: (values) => {
			handleSubmitForm(values);
		},
	});

	return (
		<form onSubmit={formik.handleSubmit} className='flex flex-col gap-4'>
			<Input
				label={"Email address"}
				type={"email"}
				id='email'
				name='email'
				aria-required='true'
				placeholder={STRINGS.placeholder.email}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.email}
				isTouched={formik.touched.email}
				error={formik.errors.email}
			/>
			<Input
				label={"Password"}
				type='password'
				id='password'
				name='password'
				aria-required='true'
				placeholder={STRINGS.placeholder.passwordSignup}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.password}
				isTouched={formik.touched.password}
				error={formik.errors.password}
			/>
			<Input
				label={"Confirm Password"}
				type='password'
				id='confirmPassword'
				name='confirmPassword'
				aria-required='true'
				placeholder={STRINGS.placeholder.passwordSignup}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.confirmPassword}
				isTouched={formik.touched.confirmPassword}
				error={formik.errors.confirmPassword}
			/>

			<div className='w-fill flex flex-col gap-4'>
				{error && <Error error={error} />}
				<Button
					variant='primary'
					width='fill'
					loading={loading}
					disabled={loading}
					type='submit'
				>
					Create new account
				</Button>
			</div>
		</form>
	);
};

export default Form;
