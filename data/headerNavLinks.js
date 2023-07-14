export default [
	{name: "home", url: "/"},
	{name: "blog", url: "/blog"},
	{name: "projects", url: "/style-guide"},
	{name: "photos", url: "/style-guide"},
	{name: "about", url: "/style-guide"},
	{name: "contact", url: "/contact"},
	{name: "pages", children: [
		{name: "author", url: "/author/main"},
		{name: "category", url: "/category/productivity"},
		{name: "tag", url: "/tag/inspirational"},
	]},
]