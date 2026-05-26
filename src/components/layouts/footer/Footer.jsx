import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="max-w-350 w-[90%] mx-auto my-5">
        <FooterTop />
        <hr className="bg-gradient-primary h-0.5 my-5" />
        <FooterBottom />
      </div>
    </footer>
  );
}
