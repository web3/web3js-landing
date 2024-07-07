/* eslint-disable @next/next/no-img-element */
import { discordUrl, blogUrl, docsUrl, githubUrl } from "./urls";


export const navigation = {
    'resources': [
        {
            'name': 'Plugins',
            'url': '/plugins',
        },
        {
            'name': 'Documentation',
            'url': docsUrl,
        },

    ],
    'community': [
        {
            'name': 'Github',
            'url': githubUrl,
        },
        {
            'name': 'Discord',
            'url': discordUrl,
        },
        {
            'name': 'Blog',
            'url': blogUrl,
        },
    ],
    'support': [
        {
            'name': 'Report a Plugin',
            'url': '',
        },
    ],
}

export default function Footer() {

    const currentYear = new Date().getFullYear(); 

    return (
      <footer className='bg-neutral-900' aria-labelledby='footer-heading'>
        <h2 id='footer-heading' className='sr-only'>
          Footer
        </h2>
        <div className='mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8'>
          <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
            <div className='space-y-8'>
              <img
                className='w-[150px]'
                src='/web3js.png'
                alt='Web3js Logo'
              />
              <p className='text-lg leading-6 text-neutral-400'>
                Web3js - The longest-running web3 library.
              </p>

            </div>
            <div className='mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0'>
              <div className='md:grid md:grid-cols-2 md:gap-8'>
                <div className='mt-10 md:mt-0'>
                  <h3 className='text-lg font-semibold leading-6 text-white'>
                    Resources
                  </h3>
                  <ul className='mt-6 space-y-4'>
                    {navigation.resources.map((item) => (
                      <li key={item.name}>
                        <a
                          target="_blank"
                          href={item.url}
                          rel="noreferrer"
                          className='text-lg leading-6 text-neutral-400 hover:text-brand-400'>
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='mt-4 md:mt-0'>
                  <h3 className='text-lg font-semibold leading-6 text-white'>
                    Community
                  </h3>
                  <ul className='mt-6 space-y-4'>
                    {navigation.community.map((item) => (
                      <li key={item.name}>
                        <a
                          target="_blank"
                          href={item.url}
                          rel="noreferrer"
                          className='text-lg leading-6 text-neutral-400 hover:text-brand-400'>
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
          
              </div>
             
              </div>
            </div>
          </div>
          <div className='mt-4 border-t border-green-400/10 py-2 sm:mt-8 lg:mt-12'>
            <p className='py-3 text-sm text-center leading-5 text-neutral-400'>
              &copy; {currentYear} Maintained with ❤️ by ChainSafe
            </p>
          </div>
      </footer>
    );
  }
  