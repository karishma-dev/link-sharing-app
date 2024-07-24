"use client";
import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "@/modules/common/components/Button";
import Input from "@/modules/common/components/Input";
import { useState } from "react";
import Error from "@/modules/common/components/Error";
import STRINGS from "@/modules/common/utils/String";
import { loginAPI } from "@/modules/onboarding/utilities/apiFunctions";
import { useRouter } from "next/navigation";

type FormData = {
	email: string;
	password: string;
};

const Form = () => {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const handleSubmitForm = async (formData: FormData) => {
		setLoading(true);
		setError("");

		const res = await loginAPI(formData);
		if (res.success) {
			router.push("/profile/links");
		} else {
			setError(res.message);
		}
		setLoading(false);
	};

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email(STRINGS.errors.invalidEmail)
				.required(STRINGS.errors.required),
			password: Yup.string().required(STRINGS.errors.required),
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
				placeholder={STRINGS.placeholder.password}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.password}
				isTouched={formik.touched.password}
				error={formik.errors.password}
			/>
			<div className='w-fill flex flex-col gap-4'>
				{error && <Error error={error} />}
				<Button
					variant='primary'
					width='fill'
					loading={loading}
					disabled={loading}
				>
					Login
				</Button>
			</div>
		</form>
	);
};

export default Form;
