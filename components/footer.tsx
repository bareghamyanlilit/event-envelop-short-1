import Link from "next/link"; 

export function Footer() {
  return (
    <footer className=" bottom-0 py-10 text-center text-base bg-[#67443A]   text-[#FFF7EB]">

      <Link href="https://www.instagram.com/siteup.am/">
        <p className="FontArmDecorativeU mt-2 text-xl">
          Պատրաստվել է <span className="underline">siteup.am</span> -ի  կողմից 
        </p>
      </Link>
    </footer>
  );
}
