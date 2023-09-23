"use client";
import { createSlice } from "@reduxjs/toolkit";

// Check if window is defined (i.e., running in the browser)
const isBrowser = typeof window !== "undefined";

let parsedLocalStorageUser = [];

if (isBrowser) {
	const localStorageUser = localStorage.getItem("user");
	parsedLocalStorageUser = localStorageUser ? JSON.parse(localStorageUser) : [];
}
const initialState = {
	user: parsedLocalStorageUser, // Initial state for user
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		newUser: (state, action) => {
			//set the state to action.payload
			state.user = action.payload;
			console.log(state.user);
			localStorage.setItem("user", JSON.stringify(action.payload));
		},
	},
});
export const { newUser } = userSlice.actions;
