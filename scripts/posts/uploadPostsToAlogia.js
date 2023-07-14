import getAllPosts from "../mdx/getAllPosts"
const dotenv = require("dotenv")
const algoliasearch = require("algoliasearch/lite")
const getRecords = () => {
	const allPosts = getAllPosts()

	const records = allPosts.map(({ frontMatter: { title, href, slug, summary } }) => ({ objectID: slug, title, href, slug, summary }))

	return records
}

(async function () {
	// initialize environment variables
	dotenv.config();

	try {
		const records = getRecords();

		// initialize the client with your environment variables
		const client = algoliasearch(
			process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
			process.env.ALGOLIA_ADMIN_KEY,
		);

		// initialize the index with your index name
		const index = client.initIndex(process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME);

		// add the data to the index
		const algoliaResponse = await index.saveObjects(records);

		console.log(
			`Successfully added ${algoliaResponse.objectIDs.length} records to Algolia search! Object IDs:\n${algoliaResponse.objectIDs.join(
				"\n",
			)}`,
		);
	}
	catch (err) {
		console.error(err);
	}
})()