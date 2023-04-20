
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import MediaCard from '../components/MediaCard';
import mediaData from '../data/mediaData';

export default function Media({globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header siteName={globalData.name} siteLogo={globalData.siteLogo} />
      <main className="w-full">
        <div className='pt-16 lg:pt-24'><br/></div>
        <h1 id="back-to-top-anchor" className="text-3xl lg:text-5xl font-bold text-center mb-12">
          {"MEDIA"}
        </h1>
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-32 px-4 md:px-8 xl:px-64">
          {mediaData.map((media, index) => (
            <MediaCard key= {index} imageSrc={media.imgSrc} title={media.title} description={media.description} podcastSrc={media.podcastSrc}/>
          ))}
        </div>
      </main>
      <Footer copyrightText={globalData.footerText} />
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

  return { props: {globalData } };
}
