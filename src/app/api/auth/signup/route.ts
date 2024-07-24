import connectDB from "@/backend/database/connect";
import User from "@/backend/models/User";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function POST(request: NextRequest) {
	try {
		const reqBody = await request.json();
		const { email, password, confirmPassword } = await reqBody;

		console.log(email, password, confirmPassword);
		const user = await User.findOne({ email });

		if (user) {
			return NextResponse.json(
				{ message: "User already exists", success: false },
				{
					status: 400,
				}
			);
		}

		if (password !== confirmPassword) {
			return NextResponse.json(
				{ message: "Passwords do not match", success: false },
				{
					status: 400,
				}
			);
		}

		const newUser = new User({
			email,
			password: password,
		});

		const savedUser = await newUser.save();

		return NextResponse.json(
			{
				message: "User created successfully",
				success: true,
			},
			{ status: 201 }
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
