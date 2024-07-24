import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

const { Schema, model } = mongoose;
const { genSalt, hash, compare } = bcryptjs;

const UserSchema = new Schema(
	{
		// name: {
		// 	type: String,
		// 	// required: true,
		// 	trim: true,
		// },
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		password: {
			type: String,
			required: true,
			minLength: 8,
			trim: true,
		},
	},
	{
		timestamps: true,
	}
);

UserSchema.pre("save", async function (next) {
	if (this.isModified("password")) {
		const salt = await genSalt(10);
		this.password = await hash(this.password ? this.password : "", salt);
	}
});

const User = mongoose.models.User || model("User", UserSchema);

export default User;
