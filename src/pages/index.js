import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { HomeHeader, Banner } from '../utils';
import img from '../images/bcg/homeBcg.jpeg';
import { BannerButton } from '../utils/Button';
import QuickInfo from '../components/HomepageComponents/QuickInfo';
import Gallery from '../components/HomepageComponents/Gallery-1';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<HomeHeader img={img}>
			<Banner title="eatery" subtitle="55 main street - Santa Monica, CA">
				<BannerButton style={{ margin: '2rem auto' }}>menu</BannerButton>
			</Banner>
		</HomeHeader>
		<QuickInfo />
		<Gallery />
	</Layout>
);

export default IndexPage;
