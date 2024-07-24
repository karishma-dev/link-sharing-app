const Loading = ({ size }: { size?: "sm" | "md" | "lg" }) => {
	return (
		<div className={`loader ${size === "sm" ? "loader-small" : ""}`}></div>
	);
};

export default Loading;
