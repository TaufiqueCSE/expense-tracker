import { checkUser } from "@/lib/checkUser";
import React from "react";

const Navbar = () => {
  const user = checkUser();
  return <div>Navbar</div>;
};

export default Navbar;
