import type { LinksFunction, MetaFunction } from '@remix-run/node';
import NavMenu from '~/components/nav_menu';
import Container from '~/components/container';
import Footer from '~/components/footer';
import Section from '~/components/section';
import { Sapiens4 } from 'public/assets/svgComponents/sapiens4';


export const meta: MetaFunction = () => {
  return [{ title: 'Services' }, { name: 'Our Services', content: '' }];
};


export const links: LinksFunction = () => {
  return [];
};


export default function Services() {

  return (
    <Container>
      <NavMenu />
      <div className='overflow-scroll'>
        <Section>
          <div className='w-full max-w-screen-xl p-5 items-center justify-between flex h-full max-sm:flex-col'>
            <div className='w-1/2 max-sm:w-full text-center'>
              <h1 className='text-white-special font-bold text-2xl mb-4'>
                Our Policies
              </h1>
              <ul className='flex flex-wrap gap-5 justify-center'>
                <li className='text-white-special font-semibold text-xl'>Registrations</li>
                <li className='text-white-special font-semibold text-xl'>Local Presence</li>
                <li className='text-white-special font-semibold text-xl'>Renewals</li>
                <li className='text-white-special font-semibold text-xl'>Payments</li>
                <li className='text-white-special font-semibold text-xl'>Registrant Transfers</li>
                <li className='text-white-special font-semibold text-xl'>Recoveries</li>
                <li className='text-white-special font-semibold text-xl'>Arbitrations</li>
                <li className='text-white-special font-semibold text-xl'>Appraisals</li>
              </ul>
            </div>
            <Sapiens4 height='1/2' width='1/2' />
          </div>
        </Section>
        <Footer />
      </div>
    </Container>
  );
}
