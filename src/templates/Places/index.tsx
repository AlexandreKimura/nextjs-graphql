import { NextSeo } from 'next-seo';
import Image from 'next/image';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import LinkWrapper from 'components/LinkWrapper';

import * as S from './styles';
import { useRouter } from 'next/dist/client/router';

type ImageProps = {
  url: string;
  width: number;
  height: number;
};

export type PlacesTemplateProps = {
  place: {
    slug: string;
    name: string;
    description?: {
      html: string;
      text: string;
    };
    gallery: ImageProps[];
  };
};

export default function PlacesTemplates({ place }: PlacesTemplateProps) {
  const router = useRouter();

  if (router.isFallback) return null;

  return (
    <>
      <NextSeo
        title={`${place.name} - My Trips`}
        description={
          place.description?.text ||
          'A simple project to show my favorite spots in the world.'
        }
        canonical="https://my-trips.alexandrekimura.com.br"
        openGraph={{
          url: 'https://my-trips.alexandrekimura.com.br',
          title: `${place.name} - My Trips`,
          description:
            place.description?.text ||
            'A simple project to show my favorite spots in the world.',
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: `${place.name}`
            }
          ]
        }}
      />
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map" />
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          <S.Heading>
            <h1>{place.name}</h1>
          </S.Heading>

          <S.Body>
            <div
              dangerouslySetInnerHTML={{
                __html: place.description?.html || ''
              }}
            />
          </S.Body>

          <S.Gallery>
            {place.gallery.map((image, index) => (
              <Image
                key={`photo-${index}`}
                src={image.url}
                alt={place.name}
                width={1000}
                height={600}
                quality={75}
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
