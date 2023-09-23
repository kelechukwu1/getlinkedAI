import { useSelector } from "react-redux";

export default function POST() {
	const user = useSelector((state) => state.user.value);

	console.log(user);
	fetch("https://backend.getlinked.ai/hackathon/contact-form", {
		method: "POST",
		body: JSON.stringify({
			firstName: user.firstName,
			email: user.email,
			message: user.message,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((response) => response.json())
		.then((json) => {
			// do something with json
			console.log(json);
		});
	return NextResponse.json({ status: "success", data: data });
}
