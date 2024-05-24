import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { Link, useNavigate } from '@remix-run/react';


export const meta: MetaFunction = () => {
  return [{ title: 'Landing Template' }, { name: 'description', content: '' }];
};

export const links: LinksFunction = () => {
  return [];
};

export default function Index() {
  return (
    <div className="relative  w-full  overflow-y-auto">
      <h1>Hello World</h1>
    </div>
  );
}
