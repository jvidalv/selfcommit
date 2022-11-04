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
          <div className="-my-2 -mr-2 hidden md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <FaBars className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="space-x-10">
            <Link
              href={paths.aboutUs}
              className="font-medium text-gray-300 hover:text-primary"
            >
              Sobre nosotros
            </Link>
            <Link
              href={paths.linkedin}
              className="font-medium text-gray-300 hover:text-primary"
            >
              Mejorador de Linkedin
            </Link>
            <Link
              href={paths.blog}
              className="font-medium text-gray-300 hover:text-primary"
            >
              Blog
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
            className="hidden absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="divide-y-2 divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Link href="/" className="font-bold text-xl text-black">
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
                <div className="hidden grid grid-cols-2 gap-4">
                  <Link
                    href={paths.aboutUs}
                    className="font-medium text-gray-300 hover:text-primary"
                  >
                    Sobre nosotros
                  </Link>
                  <Link
                    href={paths.linkedin}
                    className="font-medium text-gray-300 hover:text-primary"
                  >
                    Mejorador de Linkedin
                  </Link>
                  <Link
                    href={paths.blog}
                    className="font-medium text-gray-300 hover:text-primary"
                  >
                    Blog
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
