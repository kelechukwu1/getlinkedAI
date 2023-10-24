import * as yup from "yup";

export const registerSchema = yup.object().shape({
	email: yup.string().email("Please enter a valid email").required(),
	phone: yup.number().min(5, "Number must be less than 5").required(),
	projectTopic: yup.string().required("Project topic is required"),
	teamName: yup.string().required("Team name is required"),
	category: yup.string().required("Category is required"),
	groupSize: yup.string().required("This is a required field"),

	// privacyPolicy: yup.required("required"),
	// validDate: yup.date().required("Set a valid dates"),
});

export const contactSchema = yup.object().shape({
	email: yup
		.string()
		.email("Please enter a valid email")
		.required("Your email is required"),
	firstName: yup.string().required("Please fill in your first name"),
	message: yup.string().required("Please leave a message for us"),
});
