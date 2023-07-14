import Head from 'next/head'
import { useRouter } from 'next/router'
import siteMetadata from '@/data/siteMetadata'

const CommonSEO = ({
	pageName,
	description = siteMetadata.description,
	ogType = "website",
	featuredImage = siteMetadata.socialBanner,
	date
}) => {
	const router = useRouter()
	const canonicalUrl = `${siteMetadata.siteUrl}${router.asPath}`
	const title = pageName? `${pageName} - ${siteMetadata.name}` : siteMetadata.title
	return (
		<Head>
			<title>{title}</title>
			<meta name="robots" content="follow, index" />
			<meta name="description" content={description} />
			<meta property="og:url" content={canonicalUrl} />
			<meta property="og:type" content={ogType} />
			<meta property="og:site_name" content={siteMetadata.title} />
			<meta property="og:description" content={description} />
			<meta property="og:title" content={title} />
			<meta property="og:image" content={featuredImage} key={featuredImage} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={featuredImage} />
			<link
				rel="canonical"
				href={canonicalUrl}
			/>
			{date && <meta property="article:published_time" content={new Date(date).toISOString()} />}
		</Head>
	)
}

export default CommonSEO