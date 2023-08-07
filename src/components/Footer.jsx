import { useContext } from "react"; 
import UserContext from "../utils/UserContext"

const Footer = () => {

  const {user} = useContext(UserContext);
  return (
    <div className="bg-pink-300 h-[100px]">
      <div className="h-5">
        <h2 className="text-center p-10">Made with love {user?.name} </h2>
      </div>
    </div>
  );
};

export default Footer;
