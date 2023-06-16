import React, {Fragment} from 'react';
import {navigationSidebar} from "@/config/navigation";
import Link from "next/link";
import {ChevronDown, ChevronUp, LogOut} from "react-feather";
import clsxm from "@/utils/clsxm";
import {useRouter} from "next/router";
import {Disclosure, Transition} from "@headlessui/react";

const Sidebar = () => {
  const router = useRouter()

  return (
    <section className='sidebar'>
      <div className="mb-8">
        <h1>Logo</h1>
      </div>

      {/* Menu Navigation */}
      <div className='w-full h-full flex-1 overflow-y-auto'>
        <div className='space-y-3 '>
          {navigationSidebar.map((item, idx) => (
            <Fragment key={idx}>
              {item.path ? (
                <div className={clsxm('sidebar__nav-item path', item.active?.includes(router.pathname) && 'active')}>
                  <p>{item.name}</p>
                  <Link className='stretched-link' href={String(item?.path)}/>
                </div>
              ) : (
                <Disclosure>
                  {({open}) => (
                    <div>
                      <Disclosure.Button className='sidebar__nav-item'>
                        <div className="flex space-x-2 items-center">
                          {item?.icon} <p>{item.name}</p>
                        </div>
                        {item.active?.includes(router.pathname) || open ? <ChevronUp/> : <ChevronDown/>}
                      </Disclosure.Button>

                      <Transition
                        show={item.active?.includes(router.pathname) || open}
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="space-y-3">
                          {item.children?.map((child, idx) => (
                            <div
                              key={idx}
                              className={clsxm('sidebar__nav-item !pl-6 path',
                                child.path === router.pathname && 'active'
                              )}
                            >
                              <p>{child.name}</p>
                              <Link className='stretched-link' href={String(child?.path)}/>
                            </div>
                          ))}
                        </Disclosure.Panel>
                      </Transition>
                    </div>
                  )}
                </Disclosure>
              )}
            </Fragment>
          ))}
        </div>
      </div>

      <button 
        className='flex space-x-2 items-center'
        onClick={() => router.push("/login")}
      >
        <LogOut/><p>Logout</p>
      </button>
    </section>
  );
}

export default Sidebar;