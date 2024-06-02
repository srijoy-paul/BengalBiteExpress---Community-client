import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { sidebarLinks } from "@/config/SidebarConfig";

function LeftSidebar() {
  const { pathname } = useLocation();
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();
  const userid = user?.sub?.split("|")[1];
  console.log(user, userid);
  return (
    <nav className="hidden md:flex px-6 py-10 flex-col justify-between min-w-[270px] border-2 border-red-300">
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col ">
          <Link
            to="/"
            className="text-2xl font-bold text-saffron flex items-center gap-1 tracking-tighter mb-5 justify-center"
          >
            <img
              src="../../../public/assets/BengalBiteExpress - Community.png"
              alt=""
              style={{ height: "60px", width: "60px" }}
            />
          </Link>

          <Link
            to={`/profile/${userid}`}
            className="font-bold hover:text-saffron flex gap-3 items-center px-2 mb-2"
          >
            <img
              className="md:flex h-10 w-10 rounded-full"
              src={user?.picture}
            />
            <div className="flex flex-col body-bold">
              <p className="text-lg">{user?.name}</p>
              <p className="text-gray-300 text-xs">@{user?.nickname}</p>
            </div>
          </Link>

          {/* config driven sidebar links */}
          <ul className="flex flex-col gap-1">
            {sidebarLinks.map((link) => {
              const isActive = pathname == link.route;
              return (
                <li
                  key={link.label}
                  className={`text-gray-600 ${
                    !isActive && "hover:bg-orange-50 hover:text-black"
                  }   ${isActive && "selected-side-link"}`}
                  style={{ borderRadius: "10px" }}
                >
                  <NavLink
                    to={`${link.route}`}
                    className={`flex items-center gap-3  p-4 `}
                  >
                    <img
                      src={`${link.element}`}
                      alt=""
                      className="h-5 w-5 text-saffron"
                    />
                    {link.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="">
          {isAuthenticated ? (
            <Button
              className="flex flex-1 font-bold bg-saffron hover:bg-bgreen text-white w-full"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </Button>
          ) : (
            <Button
              className="flex flex-1 w-full font-bold text-white bg-saffron hover:bg-bgreen"
              onClick={async () => loginWithRedirect()}
            >
              Log In
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default LeftSidebar;
