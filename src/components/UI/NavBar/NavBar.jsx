import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setAccessToken,
  setRefreshToken,
  setUser,
} from "../../../store/authSlice";
import axios from "axios";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import ProfileDropDown from "./ProfileDropDown";
import MobileDropDown from "./MobileDropDown";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleSignOut = async () => {
    const refreshToken = localStorage.getItem("refreshToken");

    try {
      const response = await axios.post(
        "http://localhost:3000/guardian-dispatch/logout",
        {
          refreshToken,
        }
      );

      if (response.status === 200) {
        // clear token from local storage
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        // clear user from Redux store
        dispatch(setUser(null));
        dispatch(setAccessToken(null));
        dispatch(setRefreshToken(null));
        // redirect to login page
        window.location.href = "/enter";
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.error);
      } else {
        console.error("Error logging out:", error);
        alert("Error logging out. Please try again.");
      }
    }
  };

  return (
    <Disclosure as="nav" className="bg-slate-900">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <h1 className="text-white font-bold text-3xl">
                    Guardian Dispatch
                  </h1>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <Link
                      to="/"
                      className="px-6 py-2 rounded bg-yellow-500 text-white font-bold ml-2"
                    >
                      FEED
                    </Link>
                    {user && (
                      <Link
                        to="/create"
                        className="px-6 py-2 rounded bg-yellow-500 text-white font-bold ml-2"
                      >
                        Create Post
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {user && (
                  <Link
                    to="/enter"
                    className="px-6 py-2 rounded bg-yellow-500 text-white font-bold ml-2"
                    onClick={handleSignOut}
                  >
                    Sign out
                  </Link>
                )}
                {!user && (
                  <Link
                    to="/enter"
                    className="px-6 py-2 rounded bg-yellow-500 text-white font-bold ml-2"
                  >
                    Login
                  </Link>
                )}
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <ProfileDropDown classNames={classNames} />
              </div>
            </div>
          </div>

          <MobileDropDown />
        </>
      )}
    </Disclosure>
  );
}
