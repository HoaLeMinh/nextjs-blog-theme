// import Link from 'next/link';
// import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
// import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import homeData from '../data/homeData';
import SEO from '../components/SEO';
import HomeSection1 from '../components/HomeSection1';
import HomeSection2 from '../components/HomeSection2';
import HomeSection3 from '../components/HomeSection3';
import HomeSection5 from '../components/HomeSection5';

export default function Index({globalData}) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header siteName={globalData.name} siteLogo={globalData.siteLogo} />
      <main className="w-full">
        <h1 id="back-to-top-anchor" className="pt-6">&nbsp</h1>
        <HomeSection1 title={homeData.section_1.title} subtitle={homeData.section_1.subtitle} imgSrc={homeData.section_1.imageSrc} />
        <HomeSection2 title={homeData.section_2.title} subtitle={homeData.section_2.subtitle} buttonCaption={homeData.section_2.button_caption} href={homeData.section_2.href} />
        <HomeSection3 title={homeData.section_3.title} subtitle={homeData.section_3.subtitle} imagesSrc={homeData.section_3.images_src} managementList={homeData.section_3.managements} />
        <HomeSection2 title={homeData.section_4.title} subtitle={homeData.section_4.subtitle} buttonCaption={homeData.section_4.button_caption} href={homeData.section_4.href} />
        <HomeSection5 title={homeData.section_5.title} imagesSrc={homeData.section_5.images_src} />
      </main>
      <Footer />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const globalData = getGlobalData().data;

  return { props: {globalData} };
}
