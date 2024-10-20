import NavBar from "./NavBar";
import Logo from "./Logo";
import MaxWidthWrapper from "../maxWidthWrapper/MaxWidthWrapper";

type Props = {
  fullWidth: boolean;
};

const Header: React.FC<Props> = () => {
  return (
    <header
      className={`sticky top-0 bg-white shadow-sm z-50 h-[78px] flex items-center w-full`}
    >
      <MaxWidthWrapper className="w-full flex justify-between">
        <Logo />
        <div className="flex gap-3 items-center">
          <NavBar />
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Header;
