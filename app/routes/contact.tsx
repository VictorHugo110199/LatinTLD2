import React from 'react';
import type { LinksFunction, MetaFunction } from '@remix-run/node';
import NavMenu from '~/components/nav_menu';
import Container from '~/components/container';
import Footer from '~/components/footer';
import Section from '~/components/section';
import { Sapiens5 } from 'public/assets/svgComponents/sapiens5';
import { useFetcher } from '@remix-run/react';



export const meta: MetaFunction = () => {
  return [{ title: 'Polices' }, { name: 'Our Polices', content: '' }];
};


export const links: LinksFunction = () => {
  return [];
};


export default function Contact() {
    const fetcher = useFetcher();
    const [inputState, setInputState] = React.useState<HTMLInputElement | null>(null);
    const [inputState2, setInputState2] = React.useState<HTMLInputElement | null>(null);
    const [inputState3, setInputState3] = React.useState<HTMLTextAreaElement | null>(null);
    
  return (
    <Container>
      <NavMenu />
      <div className='overflow-scroll'>
        <Section>
          <div className='w-full max-w-screen-xl p-5 items-center justify-between flex h-full max-sm:flex-col'>
            <Sapiens5 height='1/2' width='1/2' />
            <div className='w-1/2 max-sm:w-full text-center'>
              <h1 className='text-white-special font-bold text-2xl mb-4'>
                Contact Us
              </h1>
              <div>
                <fetcher.Form 
                    // method='post' 
                    onSubmit={(e) => {
                        console.log({'name': inputState?.value, 'email': inputState2?.value, 'message': inputState3?.value});
                    }}
                    action='/contact'
                > 
                    <label className="mb-4 min-h-12 drop-shadow-3xl mx-auto flex w-11/12 max-w-screen-sm items-center overflow-hidden rounded-lg bg-slate-100 py-2 pl-8 pr-4 shadow-md">
                        <input
                            className="flex-1 bg-slate-100 outline-none"
                            type="text"
                            ref={(ref) => setInputState(ref)}
                            autoFocus
                            name="message"
                            id="message"
                            placeholder="Full Name"
                        />
                    </label>
                    <label className="mb-4 min-h-12 drop-shadow-3xl mx-auto flex w-11/12 max-w-screen-sm items-center overflow-hidden rounded-lg bg-slate-100 py-2 pl-8 pr-4 shadow-md">
                        <input
                            className="flex-1 bg-slate-100 outline-none"
                            type="text"
                            ref={(ref) => setInputState2(ref)}
                            autoFocus
                            name="message"
                            id="message"
                            placeholder="Email"
                        />
                    </label>
                    <label className="mb-4 min-h-36 drop-shadow-3xl mx-auto flex w-11/12 max-w-screen-sm items-center overflow-hidden rounded-lg bg-slate-100 py-2 pl-8 pr-4 shadow-md">
                        <textarea
                            className="flex-1 bg-slate-100 outline-none"
                            
                            ref={(ref) => setInputState3(ref)}
                            autoFocus
                            name="message"
                            id="message"
                            placeholder="Your Message"
                        />
                    </label>
                    <button className="p-1 outline-none bg-slate-100 rounded-full h-9 w-1/2" type="submit">
                        <p>Send Message</p>
                    </button>
                </fetcher.Form>
              </div>
            </div>
            
          </div>
        </Section>
        <Footer />
      </div>
    </Container>
  );
}
