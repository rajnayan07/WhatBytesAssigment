import Image from "next/image";
import profileImage from "@/components/assets/profile-image.jpeg";
import LogoImage from "@/components/assets/whatBytesLogo.png";

const Header = () => {
  return (
    <header className="bg-white border-b-2 max-w-screen p-4 flex justify-between items-center">
      <div className="text-xl font-bold flex items-center group ">
        {" "}
        <Image
          src={LogoImage}
          height={15}
          width={45}
          
        />{" "}
        <h1 className="text-2xl flex ">
          <span>What</span>{" "}
          <span>Bytes</span>
        </h1>
      </div>

      <div></div>
      <div className="flex items-center border-2 border-gray-200 hover:bg-blue-600 hover:text-white rounded-lg p-1 transition-all duration-200">
        
        <Image
          src={profileImage}
          height={25}
          width={25}
          className="rounded-full "
        />
        <span className="ml-2 font-bold ">Raj Nayan</span>
        {/* I used my name & image because I coudn't find the imgage of Rahil Siqqidue  */}
      </div>
    </header>
  );
};

export default Header;