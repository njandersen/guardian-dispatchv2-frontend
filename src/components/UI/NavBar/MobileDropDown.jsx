import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function MobileDropDown() {
  return (
    <Disclosure.Panel className="sm:hidden">
      <div className="space-y-1 px-2 pb-3 pt-2">
        <Link
          to="/home"
          className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          activeClassName="bg-gray-900 text-white"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          activeClassName="bg-gray-900 text-white"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          activeClassName="bg-gray-900 text-white"
        >
          Contact
        </Link>
      </div>
    </Disclosure.Panel>
  );
}
