/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./App.js",
		"./screens/login_screen.js",
		"./screens/register_screen.js",
		"./screens/home_screen.js",
		"./screens/profile_screen.js",
		"./screens/search_screen.js",
		"./screens/detail_screen.js",
		"./component/card.js",
		"./component/tab_navigators.js",
		"./component/user_card.js",
		"./component/comment_card.js",
		"./component/following_card.js",
		"./component/modal_post.js",
		"./component/modal_comment.js",
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
