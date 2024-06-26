import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Button } from "@/Components/ui/button";

export default function DropDownMenu() {
  const { user, logout } = useAuth0();
  const userid = user?.sub?.split("|")[1];
  console.log(userid);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=" flex text-white items-center px-3 font-bold hover:text-saffron gap-2">
        <img className="md:flex h-9 w-9 rounded-full" src={user?.picture} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
        <DropdownMenuItem className="flex md:hidden">
          <span>{user?.email}</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            to={`/profile/${userid}`}
            className="font-bold hover:text-saffron"
          >
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button
            className="flex flex-1 font-bold bg-saffron hover:bg-bgreen text-white w-full"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
