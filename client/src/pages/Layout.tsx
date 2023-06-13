import React from "react";
import { Outlet, Link } from "react-router-dom";
import SvgIcon from "../components/SvgIcon";
import { useUserStore } from "../store/user";

const Layout = () => {
  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logoutUser);
  return (
    <>
      <header className="w-full justify-center flex p-4">
        <h1 className="text-2xl text-cyan-900 font-bold">
          App resevaciones de vuelo
        </h1>
        <SvgIcon
          class="w-10 ml-4 stroke-amber-800 animate-bounce"
          icon="roket"
        ></SvgIcon>
      </header>
      {user && (
        <nav className="w-full bg-indigo-300 pb-1 pt-3">
          <ul className="flex w-full justify-around">
            <li>
              <Link
                className="flex p-2 rounded duration-100 hover:-translate-y-0.5 hover:bg-teal-400"
                to="/flights"
              >
                Reserva tu Vuelo
                <SvgIcon class="w-6 ml-2" icon="airplane"></SvgIcon>
              </Link>
            </li>
            <li>
              <Link
                className="flex p-2 rounded duration-100 hover:-translate-y-0.5 hover:bg-teal-400"
                to="/reservations"
              >
                Mis Reservaciones
                <SvgIcon class="w-6 ml-2" icon="list"></SvgIcon>
              </Link>
            </li>
            <li>
              <Link
                className="flex p-2 rounded duration-100 hover:-translate-y-0.5 hover:bg-teal-400"
                to="/"
                onClick={logout}
              >
                Salir
                <SvgIcon class="w-6 ml-2" icon="logout"></SvgIcon>
              </Link>
            </li>
          </ul>
        </nav>
      )}
      <hr />
      <div className="max-w-6xl m-auto p-2">
        <Outlet />
      </div>
      <hr />
      {!user && (
        <div className="text-center">
          <Link className="underline" to="/">
            Selecciona un usuario
          </Link>{" "}
          para hacer una reserva
        </div>
      )}
    </>
  );
};

export default Layout;
