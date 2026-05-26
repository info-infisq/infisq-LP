import {
  ourService,
  exploreMore,
  contactDetails,
  socialMediaLinks,
} from "../../../data/layoutContant";
import FooterDetailsLoader from "./FooterDetailsLoader";
import AnimatedPhone from "./animated_temp";



export default function FooterTopRight() {
  return (
    <div className="w-full lg:w-[65%] flex justify-between flex-wrap ld:flex-row gap-8 md:gap-8 ">
      <FooterDetailsLoader title="Our Services" datas={ourService} />
      <FooterDetailsLoader title="Explore More" datas={exploreMore} />
      <div className="flex flex-col gap-5">
        <h1 className="text-primary text-base-custom font-semibold!">
          Contact us
        </h1>
        <ul className="flex flex-col gap-3">
  {contactDetails.map((detail, index) => {
  return (
    <li key={index} className="flex gap-2 items-start"> {/* items-center → items-start */}
      <span className="mt-0.5">
        <detail.Icon className="text-primary shrink-0" />
      </span>

      {detail.label === "Phone" ? (
        <AnimatedPhone />
      ) : (
        <span className="whitespace-pre-line">{detail.value}</span>
      )}
    </li>
  );
})}
</ul>

        <div className="flex gap-5 my-3">
          {socialMediaLinks.map((social, index) => {
            return (
              <a key={index} href={social.url} target="_blank">
                <social.Icon className="text-primary" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
