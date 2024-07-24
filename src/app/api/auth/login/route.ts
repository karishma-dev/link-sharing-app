import connectDB from "@/backend/database/connect";
import User from "@/backend/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connectDB();

export async function POST(request: NextRequest) {
	try {
		const reqBody = await request.json();
		const { email, password } = await reqBody;

		const user = await User.findOne({ email });

		if (!user) {
			return NextResponse.json(
				{ message: "User does not exist", success: false },
				{
					status: 400,
				}
			);
		}

		const isMatch = await bcryptjs.compare(password, user.password);

		if (!isMatch) {
			return NextResponse.json(
				{ message: "Invalid credentials", success: false },
				{
					status: 400,
				}
			);
		}

		const tokenData = {
			id: user._id,
			email: user.email,
		};

		if (process.env.DB_JWT_SECRET) {
			const token = await jwt.sign(tokenData, process.env.DB_JWT_SECRET, {
				expiresIn: `${process.env.DB_JWT_EXPIRES_IN}`,
			});
			const response = NextResponse.json(
				{
					message: "User logged in successfully",
					user,
					token,
					success: true,
				},
				{ status: 200 }
			);
			response.cookies.set("token", token, {
				httpOnly: true,
			});

			return response;
		}

		return NextResponse.json(
			{ message: "An error occurred", success: false },
			{
				status: 500,
			}
		);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ message: "An error occurred", success: false },
			{
				status: 500,
			}
		);
	}
}
