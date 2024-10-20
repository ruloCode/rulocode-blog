import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link
        href="/"
        aria-label="Go to Rulocode's homepage"
        className="text-lg font-bold"
      >
        <div className="flex gap-2">
          <Image
            src="/assets/Logo_Rulo.svg"
            alt="Rulocode logo, go to homepage"
            width={30}
            height={30}
            priority // Para cargar el logo de inmediato
          />
          <p className="flex font-light">
            Rulo <span className="font-extrabold">Code</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
