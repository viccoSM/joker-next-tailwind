import React from 'react';
import DashboardLayout from "@/layouts/DashboardLayout";
import {Disclosure, Transition} from "@headlessui/react";

const Dashboard = () => (
  <DashboardLayout>
    <div className="p-4">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full flex justify-between items-center px-4 py-2 text-sm font-medium text-left text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-50">
              <span>Expand/Collapse</span>
              <svg
                className={`ml-2 h-5 w-5 transform ${open ? 'rotate-180' : ''}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Disclosure.Button>

            <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus diam ut nunc vehicula blandit.
                  Aliquam eget purus eget nisi pharetra luctus. Aliquam congue, mi id mollis accumsan, arcu mauris
                  tristique odio, nec lacinia risus orci quis nulla. Sed euismod augue non est pretium viverra. Duis
                  sodales erat a orci aliquam, in pellentesque velit faucibus. In eget odio lacinia, hendrerit elit
                  vel, fringilla neque. Aenean in velit vel lacus lobortis rhoncus eu sit amet est. Proin vitae elit
                  ut elit eleifend pharetra ut in arcu. Donec volutpat tellus ac metus hendrerit, nec consectetur
                  ipsum scelerisque.
                </p>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  </DashboardLayout>
);

export default Dashboard;