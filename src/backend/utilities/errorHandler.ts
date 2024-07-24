interface CustomError {
	message: string;
	statusCode: number;
	errorFields: Array<Object>;
}

const errorHandler = (error: any) => {
	let customError: CustomError = {
		message: error.message || "Something went wrong.",
		statusCode: error.statusCode || 500,
		errorFields: [],
	};

	if (error.name === "ValidationError") {
		customError.statusCode = 400;
		customError.message = "Validation Error";
		customError.errorFields = Object.keys(error.errors).map((field: any) => {
			return {
				field: field,
				message: error.errors[field].message,
			};
		});
	}

	if (error.code && error.code === 11000) {
		customError.statusCode = 400;
		customError.message = "Duplicate key error";
		customError.errorFields = Object.keys(error.keyValue).map((field: any) => {
			return {
				field: field,
				message: "Duplicate key error",
			};
		});
	}

	if (error.name === "CastError") {
		customError.statusCode = 404;
		customError.message = `No record found with id ${error.value}`;
		customError.errorFields = [];
	}

	return { ...customError };
};

export default errorHandler;
