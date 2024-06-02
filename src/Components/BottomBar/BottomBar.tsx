import { bottombarLinks } from "@/config/SidebarConfig";
import React from "react";
import { Link, useLocation } from "react-router-dom";

function BottomBar() {
  const { pathname } = useLocation();
  return (
    <section className="md:hidden flex justify-between px-2">
      {bottombarLinks.map((link) => {
        const isActive = pathname == link.route;
        return (
          <Link
            key={link.label}
            to={`${link.route}`}
            className={`text-gray-600 ${
              !isActive && "hover:bg-orange-50 hover:text-black"
            }   ${
              isActive && "selected-side-link"
            } rounded-[10px] flex justify-center flex-col items-center py-2`}
          >
            <img
              src={`${isActive ? link.element : link.elementNotSelected}`}
              alt=""
              className="h-5 w-5 text-saffron"
            />
            <span className="text-sm text-bolder tracking-tighter">
              {link.label}
            </span>
          </Link>
        );
      })}
    </section>
  );
}

export default BottomBar;
