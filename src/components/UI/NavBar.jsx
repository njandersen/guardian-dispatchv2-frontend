import { Link } from "react-router-dom";

export default function NavBar() {
  //TODO

  const nav = [
    {
      name: "Feed",
      path: "/",
    },
    {
      name: "Create Post",
      path: "/create",
    },
    {
      name: "Login",
      path: "/enter",
    },
  ];

  return (
    <nav className="flex justify-between items-center py-4 bg-slate-900">
      <div className="flex justify-start">
        {nav.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="px-6 py-2 rounded bg-yellow-500 text-white font-bold ml-2"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <h1 className="text-2xl font-bold text-white mx-auto">
        Guardian Dispatch
      </h1>
    </nav>
  );
}
