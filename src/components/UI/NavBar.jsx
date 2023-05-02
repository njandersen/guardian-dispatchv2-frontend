import { Link } from "react-router-dom";

export default function NavBar() {
  //TODO

  return (
    <nav className="flex justify-between items-center py-4 bg-slate-900">
      <p className="text-2xl font-bold text-grey-800">Guardian Dispatch</p>
      <div className="flex">
        <Link
          to="/"
          className="px-6 py-2 rounded bg-yellow-500 text-white font-bold"
        >
          FEED
        </Link>
        <Link
          to="/create"
          className="px-6 py-2 rounded bg-yellow-500 text-white font-bold"
        >
          Create Post
        </Link>
      </div>
    </nav>
  );
}
