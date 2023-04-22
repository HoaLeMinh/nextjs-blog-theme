import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import { Container } from "@mui/system"
import MyCarousel from '../components/MyCarousel';
import projectsData from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';

export default function Projects({ globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} siteLogo={globalData.siteLogo} />
      <main className="w-full">
        <div className='pt-16 lg:pt-24'><br/></div>
        <h1 id="back-to-top-anchor" className="text-3xl lg:text-5xl font-bold text-center mb-12">
          {"PROJECTS"}
        </h1>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8 px-4 md:px-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} title={project.title} description={project.description} imagesSrc={project.imagesSrc}></ProjectCard>
          ))}
        </div>
        {/* <Container maxWidth='sm'>
          <MyCarousel images={projectsData[0].imagesSrc}/>
        </Container> */}
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
