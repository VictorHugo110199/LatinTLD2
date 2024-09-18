import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { useAppSelector } from '~/hooks/hooks';
import NavMenu from '~/components/nav_menu';
import { Sapiens } from 'public/assets/svgComponents/sapiens';
import Container from '~/components/container';
import Footer from '~/components/footer';
import { Sapiens2 } from 'public/assets/svgComponents/sapiens2';


export const meta: MetaFunction = () => {
  return [{ title: 'Landing Template' }, { name: 'description', content: '' }];
};


export const links: LinksFunction = () => {
  return [];
};


export default function Index() {
  const number = useAppSelector((state) => state.aside.number);
  return (
    <Container>
      <NavMenu />
      <div style={{ overflowY: 'scroll', height: '100vh' }}>
        <section className='w-full justify-center flex border-b-2 border-yellow '>
          <div className='w-full max-w-screen-xl p-5 items-center justify-between flex h-full max-sm:flex-col'>
            <div className='w-1/2 max-sm:w-full text-center'>
              <h1 className='text-white-special font-bold text-2xl'>
                Unlock the power of your online presence with our domain solutions, where your needs are our priority.
              </h1>
            </div>
            <Sapiens height='1/2' width='1/2' />
          </div>
        </section>
        <section className='w-full justify-center flex border-b-2 border-yellow'>
          <div className='w-full max-w-screen-xl p-5 items-center justify-between flex flex-col h-full max-sm:flex-col'>
            <div className='w-1/2 max-sm:w-full text-center'>
              <h2 className='text-white-special font-bold text-2xl'>
                Experienced Service for all your Latin American Domain Needs
              </h2>
            </div>
            <div className='mt-6'>
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
            <Sapiens2 height='1/2' width='1/2' />
          </div>
        </section>
        <Footer />
      </div>
    </Container>
  );
}
