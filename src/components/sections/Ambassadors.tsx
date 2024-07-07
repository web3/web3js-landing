/* eslint-disable @next/next/no-img-element */
import SectionHeading from "../SectionHeading"

const ambassadors = [
    {
      name: 'Anum Qudsia',
      country: 'Norway',
      imageUrl: '/ambassadors/0.png'
    },
    {
      name: 'Eloi Sanchez',
      country: 'Germany',
      imageUrl: '/ambassadors/0.png'
    },
    {
      name: 'Alejandro Soto Diaz',
      country: 'Columbia',
      imageUrl: '/ambassadors/1.png'
    },
    {
      name: 'Labore Kodjo',
      country: 'Togo',
      imageUrl: '/ambassadors/2.png'
    },
    {
      name: 'Adefisayo Adejumo',
      country: 'Nigeria',
      imageUrl: '/ambassadors/3.png'
    },
    {
      name: 'Ese Monday',
      country: 'Nigeria',
      imageUrl: '/ambassadors/4.png'
    },
  ]
  
  export default function Ambassadors() {
    return (
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-8xl">
            <SectionHeading type="primary">Web3js Ambassadors</SectionHeading>
          </div>
          <ul
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
          >
            {ambassadors.map((person) => (
              <li key={person.name} className="rounded-2xl bg-bg px-8 py-10">
                <img alt="" src={person.imageUrl} className="mx-auto h-24 w-24 rounded-full" />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{person.name}</h3>
                <h3 className="mt-1 text-base font-semibold leading-7 tracking-tight text-white">{person.country}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  