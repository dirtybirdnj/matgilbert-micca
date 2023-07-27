export default [
	{name: "home", url: "/"},
	{name: "blog", url: "/blog"},
	{name: "photos", url: "/style-guide"},
	{name: "about", url: "/about"},
	{name: "contact", url: "/contact"},
	{name: "pages", children: [
		{name: "author", url: "/author/main"},
		{name: "category", url: "/category/productivity"},
		{name: "tag", url: "/tag/inspirational"},
	]},
]