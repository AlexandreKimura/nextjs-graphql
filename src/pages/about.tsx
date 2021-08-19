import client from 'graphql/client';
import { GET_PAGES } from 'graphql/queries';
import AboutTemplate from 'templates/about';

export default function AboutPage() {
  return <AboutTemplate />;
}

export const getStaticProps = async () => {
  const { pages } = await client.request(GET_PAGES);

  console.log(pages);

  return {
    props: {}
  };
};

//getStaticPaths => Server para gerar as urls em build time => /about
//getStaticProps => Buscar os dados da página(props) => build time
//getServerSideProps => Buscar dados da página(props) => Runtime
