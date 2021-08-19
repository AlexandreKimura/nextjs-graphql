import client from 'graphql/client';
import { GetPageBySlugQuery, GetPagesQuery } from 'graphql/generated/graphql';
import { GET_PAGES, GET_PAGE_BY_SLUG } from 'graphql/queries';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import PageTemplate, { PageTemplateProps } from 'templates/Pages';

export default function Page({ heading, body }: PageTemplateProps) {
  const router = useRouter();

  if (router.isFallback) return null;

  return <PageTemplate heading={heading} body={body} />;
}

export async function getStaticPaths() {
  try {
    const { pages } = await client.request<GetPagesQuery>(GET_PAGES, {
      first: 1
    });

    const paths = pages.map(({ slug }) => ({
      params: { slug }
    }));

    return { paths, fallback: true };
  } catch (err) {
    console.log(err);
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request<GetPageBySlugQuery>(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`
  });

  if (!page) {
    return { notFound: true };
  }

  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  };
};

//getStaticPaths => Server para gerar as urls em build time => /about
//getStaticProps => Buscar os dados da página(props) => build time
//getServerSideProps => Buscar dados da página(props) => Runtime
