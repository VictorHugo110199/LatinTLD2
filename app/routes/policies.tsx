import type { LinksFunction, MetaFunction } from '@remix-run/node';
import NavMenu from '~/components/nav_menu';
import Container from '~/components/container';
import Footer from '~/components/footer';
import Section from '~/components/section';
import { Sapiens4 } from 'public/assets/svgComponents/sapiens4';


export const meta: MetaFunction = () => {
  return [{ title: 'Polices' }, { name: 'Our Polices', content: '' }];
};


export const links: LinksFunction = () => {
  return [];
};


export default function Policies() {

  return (
    <Container>
      <NavMenu />
      <div className='overflow-scroll'>
        <Section>
          <div className='w-full max-w-screen-xl p-5 items-center justify-between flex h-full max-sm:flex-col'>
            <Sapiens4 height='1/2' width='1/2' />
            <div className='w-1/2 max-sm:w-full text-center'>
              <h1 className='text-white-special font-bold text-2xl'>
                Our Policies
              </h1>
              <p className='text-white-special'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
            
          </div>
        </Section>
        <Footer />
      </div>
    </Container>
  );
}
