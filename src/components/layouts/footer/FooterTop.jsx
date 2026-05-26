import FooterTopLeft from "./FooterTopLeft";
import FooterTopRight from "./FooterTopRight";

export default function FooterTop() {
  return (
    <div className="flex gap-5 flex-col lg:flex-row text-base-custom justify-between">
      <FooterTopLeft />
      <FooterTopRight />
    </div>
  );
}
