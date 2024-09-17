import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { Link, useNavigate } from '@remix-run/react';
import { useAppSelector } from '~/hooks/hooks';
import NavMenu from '~/components/nav_menu';
import { Sapiens } from 'public/assets/svgComponents/sapiens';
import Container from '~/components/container';
import Section from '~/components/section';

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
      <section className='w-full justify-center flex border-b-4 border-yellow bg-blue-background'>
        <div className='w-full max-w-screen-xl p-5 items-center justify-between flex h-full max-sm:flex-col'>
          <div className='w-1/2 max-sm:w-full text-center'>
            <h1 className='text-white-special font-bold text-2xl'>
              Unlock the power of your online precense with our domain solutions, where ypur necesities are our priority.
            </h1>
          </div>
          <Sapiens height='1/2' width='1/2'/>
        </div>
      </section>
    </Container>
  );
}
