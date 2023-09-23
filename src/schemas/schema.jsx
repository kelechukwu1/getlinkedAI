import * as yup from "yup";

export const basicSchema = yup.object().shape({
	teamName: yup
		.date()
		.min(new Date(), "Date must be current")
		.required("Enter departure date"),
	phone: yup
		.date()
		.min(new Date(), "Date must be current")
		.required("Enter return date"),
	// validDate: yup.date().required("Set a valid dates"),
});
