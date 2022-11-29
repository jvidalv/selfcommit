import { Fragment } from 'react'

import { Popover, Transition } from '@headlessui/react'
import paths from 'navigation/paths'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'

import Container from 'components/container'

const Header = () => {
  return (
    <header className={`relative border-b border-gray-900  z-10 `}>
      <Popover>
        <Container className="flex items-center justify-between py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="font-bold text-white">
              Selfcommit.
            </Link>
          </div>
          <div className="-my-2 -mr-2 block md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <FaBars className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:block space-x-8">
            <Link
              href={paths.linkedin}
              className="font-medium text-gray-300 hover:text-primary"
            >
              Mejora tu Linkedin
            </Link>
            <Link
              href={paths.aboutUs}
              className="font-medium text-gray-300 hover:text-primary"
            >
              Sobre nosotros
            </Link>
            <Link
              href={paths.build}
              className="px-2 py-1 bg-primary text-white font-semibold text-gray-300"
            >
              Construye con nosotros
            </Link>
          </div>
        </Container>
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="divide-y-2 divide-gray-800  border border-gray-800 rounded-lg bg-black shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Link href="/" className="font-bold text-xl text-white">
                      Selfcommit.
                    </Link>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <FaTimes className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="py-6 px-5">
                <div className="grid grid-cols-1 gap-4">
                  <Link
                    href={paths.linkedin}
                    className="font-medium text-gray-300 hover:text-primary"
                  >
                    Mejora tu Linkedin
                  </Link>
                  <Link
                    href={paths.aboutUs}
                    className="font-medium text-gray-300 hover:text-primary"
                  >
                    Sobre nosotros
                  </Link>
                  <Link
                    href={paths.build}
                    className="px-2 py-1 bg-primary text-white font-semibold text-gray-300"
                  >
                    Construye
                  </Link>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  )
}

export default Header
