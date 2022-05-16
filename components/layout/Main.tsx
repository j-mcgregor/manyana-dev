/* eslint-disable react/no-unescaped-entities */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, MenuIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { Fragment, ReactNode, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  XO_PATTERN,
  CIRCUITS_PATTERN,
  DOTS_PATTERN,
  GRID_PATTERN
} from '../../styles/svgs';

const Hero = () => {
  const router = useRouter();

  const menuItems = [
    {
      href: '#',
      label: 'About'
    },
    {
      href: '#',
      label: 'Work'
    },
    {
      href: '#',
      label: 'Contact'
    }
  ];

  return (
    <div className="h-screen w-full flex font-Koulen">
      {/* left */}
      <div
        className="w-1/2 h-full bg-yellow-300 flex flex-col justify-center text-slate-800 p-10 font-bold bg-fixed shadow-lg"
        style={{
          backgroundImage: GRID_PATTERN
        }}
      >
        <h1 className="text-7xl leading-10">Manyana</h1>
        <h1 className="text-7xl text-white">
          Dev<span className="text-black">.</span>
        </h1>
        <h3 className="text-3xl">Bespoke software</h3>
      </div>
      {/* right */}
      <div className="w-1/2 h-full relative flex items-center justify-center">
        <Image
          src="/images/monkey.svg"
          layout="fixed"
          height={300}
          width={300}
          alt="Monkey"
        />
        <Menu
          as="div"
          className="absolute top-5 right-5 inline-block text-left z-50"
        >
          <Menu.Button className="inline-flex w-full justify-center rounded-md text-slate-700 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <MenuIcon className="h-10 w-10 text-slate-800" aria-hidden="true" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                {menuItems.map((item, i) => {
                  return (
                    <Menu.Item key={i}>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? 'bg-violet-500 text-white'
                              : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          onClick={() => router.push(`${item.href}`)}
                        >
                          {item.label}
                        </button>
                      )}
                    </Menu.Item>
                  );
                })}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div
      className="w-full h-screen bg-zinc-800 flex flex-col justify-center text-slate-800 p-10 font-bold"
      style={{
        backgroundImage: DOTS_PATTERN,
        backgroundColor: 'linear-gradient(45%, black, white)'
      }}
    >
      <div className="container flex mx-auto h-auto gap-10">
        <div className="w-1/2  h-[90%]"></div>
        <div className="w-1/2 h-full flex flex-col items-end">
          <h1 className="text-7xl text-stone-200 font-Koulen">About us</h1>
          <div className="p-8 bg-stone-200 text-stone-00 h-full rounded-3xl shadow-2xl">
            <p className="w-3/4 text-right ml-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias assumenda dignissimos praesentium minus quos officiis
              eum laborum neque aspernatur sit explicabo commodi deleniti
              voluptate sunt iste odit, expedita consequatur reiciendis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  const [workTab, setWorkTab] = useState<
    'SCOPE' | 'DESIGN' | 'BUILD' | 'TEST' | 'RELEASE'
  >('SCOPE');

  const ScopeBody = () => (
    <>
      <h4 className="uppercase">
        <span className="text-green-500">Scoping</span> your project
      </h4>
      <p className="text-sm leading-7">
        Starting any project can be daunting, but at{' '}
        <span className="text-yellow-500">ManyanaDev</span> we're here to help
        you turn your ideas into reality
      </p>
      <p>
        We map your goals into milestones according to your needs and break
        those down in to tasks which are then organised on a sprint by sprint
        basis
      </p>
    </>
  );

  const DesignBody = () => (
    <>
      <h4 className="uppercase">
        Building the <span className="text-green-500">UI</span>
      </h4>
      <p className="text-sm leading-7">
        Did you know that on average users take 2 seconds to decide if your app
        is worth it. Proper <span className="text-yellow-500">UX/UI</span>{' '}
        consideration cannot be understated
      </p>
      <p className="text-sm">
        Our expert team works with you to map out every page, journey and USP
        before development even begins, so that when building starts, its as
        fast and efficient as possible
      </p>
    </>
  );

  const BuildBody = () => (
    <>
      <h4 className="uppercase">
        Where the <span className="text-green-500">magic</span> happens
      </h4>
      <p className="text-sm leading-7">
        We only create products using the highest standards. Once development
        begins, we make sure that you are privy to every update using dedicating
        production, staging and preview domains.
      </p>
      <p className="text-sm leading-7">
        Modern software design principles draw heavily from Agile, meaning
        regular, small and rapid releases so we can turn on the spin of a dime
        if the situation requires it.
      </p>
    </>
  );

  const TestBody = () => (
    <>
      <h4 className="uppercase">
        Unit, integration and end-to-end{' '}
        <span className="text-green-500">testing</span>
      </h4>
      <p className="text-sm leading-7">
        Testing is a crucial yet under-represented part of softwre development,
        and we strive for the best coverage so you can have confidence in your
        apps performance.
      </p>
      <p className="text-sm leading-7">
        Unit tests are cheap to write, integration tests give you confidence in
        plugging features together and end to end tests can give you confidence
        in your user journeys.
      </p>
    </>
  );

  const ReleaseBody = () => (
    <>
      <h4 className="uppercase">
        Releasing it into the <span className="text-green-500">wild</span>
      </h4>
      <p className="text-sm leading-7">
        We adhere to the{' '}
        <code className="text-xs text-yellow-500">
          Preview → Staging → Production
        </code>{' '}
        lifecycle, with automated releases on your schedule, complete with email
        notifications and release notes.
      </p>
      <p className="text-sm leading-7">
        You will have full confidence in every release knowing that each and
        every release to production has been planned, designed, built and tested
        to the best of our abilities.
      </p>
    </>
  );

  let body: ReactNode;

  switch (workTab) {
    case 'DESIGN':
      body = <DesignBody />;
      break;
    case 'BUILD':
      body = <BuildBody />;
      break;
    case 'TEST':
      body = <TestBody />;
      break;
    case 'RELEASE':
      body = <ReleaseBody />;
      break;
    default:
      body = <ScopeBody />;
      break;
  }

  return (
    <div
      className="w-full bg-zinc-100 flex flex-col justify-center text-slate-800 py-20 font-bold bg-fixed"
      style={{
        backgroundImage: CIRCUITS_PATTERN
      }}
    >
      <div className="container flex mx-auto h-auto gap-10">
        <div className="w-1/3 h-full flex flex-col">
          <h1 className="text-7xl text-stone-800 font-Koulen">Work</h1>
          <div className="p-8 bg-stone-800 text-stone-100 h-full shadow-2xl">
            <p className="w-3/4">
              Whatever your project, we believe in quality.
            </p>
          </div>
        </div>
        <div className="w-2/3 h-full space-y-4 bg-white bg-opacity-60 shadow-lg">
          <div>
            <ul className="flex uppercase font-Koulen">
              <li
                className={`p-3 hover:bg-yellow-500 hover:text-stone-700 cursor-pointer duration-200 text-yellow-500 ${
                  workTab === 'SCOPE' ? 'bg-yellow-500 text-stone-700' : ''
                }`}
                onClick={() => setWorkTab('SCOPE')}
              >
                Scope
              </li>
              <li
                className={`p-3 hover:bg-yellow-500 hover:text-stone-700 cursor-pointer duration-200 text-yellow-500 ${
                  workTab === 'DESIGN' ? 'bg-yellow-500 text-stone-700' : ''
                }`}
                onClick={() => setWorkTab('DESIGN')}
              >
                Design
              </li>
              <li
                className={`p-3 hover:bg-yellow-500 hover:text-stone-700 cursor-pointer duration-200 text-yellow-500 ${
                  workTab === 'BUILD' ? 'bg-yellow-500 text-stone-700' : ''
                }`}
                onClick={() => setWorkTab('BUILD')}
              >
                Build
              </li>
              <li
                className={`p-3 hover:bg-yellow-500 hover:text-stone-700 cursor-pointer duration-200 text-yellow-500 ${
                  workTab === 'TEST' ? 'bg-yellow-500 text-stone-700' : ''
                }`}
                onClick={() => setWorkTab('TEST')}
              >
                Test
              </li>
              <li
                className={`p-3 hover:bg-yellow-500 hover:text-stone-700 cursor-pointer duration-200 text-yellow-500 ${
                  workTab === 'RELEASE' ? 'bg-yellow-500 text-stone-700' : ''
                }`}
                onClick={() => setWorkTab('RELEASE')}
              >
                Release
              </li>
            </ul>
          </div>
          <div className="w-full p-10 space-y-4">{body}</div>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div
      className="w-full h-screen bg-yellow-400 flex flex-row justify-center text-slate-800 p-10 font-bold"
      style={{
        backgroundImage: XO_PATTERN
      }}
    >
      {/* left */}
      <div className="w-1/2"></div>
      {/* right */}
      <div className="w-1/2 bg-stone-100 h-full p-20 shadow-lg">
        <h2 className="text-4xl font-Koulen">Get in touch</h2>
        <form className="space-y-3">
          <div className="space-y-2">
            <label htmlFor="name">Name</label>
            <input
              {...register('name', {
                required: {
                  value: true,
                  message: 'Please enter a name'
                }
              })}
              placeholder="Bruce Wayne"
              className="w-full p-3 rounded-lg"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email">Email</label>
            <input
              {...register('email', {
                required: {
                  value: true,
                  message: 'Please enter a valid email'
                }
              })}
              type="email"
              placeholder="batman@wayne-enterprises.com"
              className="w-full p-3 rounded-lg border-0"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message">Message</label>
            <textarea
              {...register('message', {
                required: {
                  value: true,
                  message: 'Please enter a valid email'
                }
              })}
              placeholder="Say hello!"
              className="w-full p-3 rounded-lg border-0"
            ></textarea>
          </div>
          <div className="flex">
            <button
              type="submit"
              className="px-6 p-2 bg-slate-700 text-slate-100 rounded-md ml-auto"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const Main: React.FC = () => {
  return (
    <div className="font-Raleway">
      {/* hero */}
      <Hero />
      {/* about */}
      <About />
      {/* work */}
      <Work />
      {/* contact */}
      <Contact />
      {/* footer */}
    </div>
  );
};
