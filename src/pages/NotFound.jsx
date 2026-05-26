import { Link } from "react-router-dom";
import Btn from "../components/ui/Btn";

export default function NotFound() {
  return (
    <section className="py-35 w-full flex-center bg-[url(imgs/hero-bg.png)] bg-no-repeat bg-center bg-cover">
      <div className="w-[90%] max-w-350 flex flex-col items-center gap-5">
        <img src="/imgs/404.png" alt="404" className="w-[60%]" />
        <h1 className="text-heading-custom">Page Not Found</h1>
        <p className="text-base-custom">
          Sorry , the page you're looking for doesn't exit
        </p>
        <Link to="/">
          <Btn label="Back to Home" />
        </Link>
      </div>
    </section>
  );
}
