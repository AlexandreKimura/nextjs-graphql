import dynamic from 'next/dynamic';

const Map = dynamic(() => import('components/Map'), { ssr: false });

export default function Home() {
  return (
    <Map
      places={[
        {
          id: '1',
          name: 'Londrina',
          slug: 'londrina',
          location: {
            latitude: 50,
            longitude: -50
          }
        }
      ]}
    />
  );
}
