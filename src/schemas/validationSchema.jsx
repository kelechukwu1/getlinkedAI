import * as yup from "yup";

export const registerSchema = yup.object().shape({
	email: yup.string().email("Please enter a valid email").required(),
	phone: yup.string().min(5, "Phone must be less than 5").required(),
	projectTopic: yup.string().required("Project topic is required"),
	teamName: yup.string().required("Team name is required"),
	category: yup.number().required("Category is required"),
	groupSize: yup.number().required("This is a required field"),
	privacyPolicy: yup.boolean("This is a required field"),
});

export const contactSchema = yup.object().shape({
	email: yup
		.string()
		.email("Please enter a valid email")
		.required("Your email is required"),
	firstName: yup.string().required("Please fill in your first name"),
	message: yup.string().required("Please leave a message for us"),
});
