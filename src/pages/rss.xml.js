import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const orgs = await getCollection('org');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: orgs
			.map((org) => ({
				...org.data,
				link: `/node/${org.slug}/`,
				pubDate: org.data.date,
			})),
	});
}
