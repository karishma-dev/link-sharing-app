import axios from "axios";

export const signUpApi = async (formData: {
	email: string;
	password: string;
	confirmPassword: string;
}) => {
	try {
		const res = await axios.post("/api/auth/signup", formData);
		return res.data;
	} catch (error) {
		return { message: "An error occurred", success: false };
	}
};

export const loginAPI = async (formData: {
	email: string;
	password: string;
}) => {
	try {
		const res = await axios.post("/api/auth/login", formData);
		return res.data;
	} catch (error) {
		return { message: "An error occurred", success: false };
	}
};

export const logoutAPI = async () => {
	try {
		const res = await axios.get("/api/auth/logout");
		return res.data;
	} catch (error) {
		return { message: "An error occurred", success: false };
	}
};
