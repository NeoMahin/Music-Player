import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <nav className="relative w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-indigo-800 to-teal-800 opacity-70 backdrop-blur-md -z-10"></div>

      <ul className="relative flex items-center justify-around py-6">
        <li className="text-xl hover:text-primary">
          <NavLink
            to="/Favorite"
            className={({ isActive }) =>
              isActive ? "fill-red-600 text-red-600" : "text-white"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </NavLink>
        </li>

        <li className="text-xl hover:text-primary">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-red-600" : "text-white"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </NavLink>
        </li>

        <li className="text-xl hover:text-primary">
          <NavLink
            to="/Playlist"
            className={({ isActive }) =>
              isActive ? "text-red-600" : "text-white"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
              />
            </svg>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
