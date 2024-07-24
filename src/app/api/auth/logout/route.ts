import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	try {
		const response = NextResponse.json(
			{ message: "User logged out successfully", success: true },
			{ status: 200 }
		);
		response.cookies.set("token", "", {
			httpOnly: true,
			expires: new Date(0),
		});

		return response;
	} catch (error) {
		return NextResponse.json(
			{ message: "An error occurred", success: false },
			{
				status: 500,
			}
		);
	}
}
