import { Link } from "react-router-dom";

export default function FooterDetailsLoader({ title, datas }) {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-primary  text-base-custom font-semibold!">{title}</h1>
      <ul className="flex flex-col gap-3 justify-center">
        {datas.map((data) => {
          return (
            <Link to={data.path} key={data.id}>
              <li>{data.label}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
