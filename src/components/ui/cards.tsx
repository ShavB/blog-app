import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

interface ImgType {
  dimension: object;
  content_type: string;
  file_size: string;
  url: string;
  filename: string;
}

interface CardProps {
  date: Date;
  title: string;
  desc: string;
  img: ImgType;
}

const Cards: React.FC<CardProps> = ({ img, desc, date, title }) => {
  const [onHover, setOnHover] = useState("");

  const handleHoverEnter = () => {
    setOnHover("translate-x-2 scale-110 transition ease-in-out delay-150");
  };

  const handleHoverLeave = () => {
    setOnHover("transition ease-in-out delay-150");
  };

  return (
    <>
      <section className="h-[22rem] w-[60rem] bg-[#ECE8E1]">
        <div
          onMouseEnter={handleHoverEnter}
          onMouseLeave={handleHoverLeave}
          className="flex flex-2 items-center p-10 mt-3 gap-4 cursor-pointer "
        >
          <div className="h-full w-[50%] bg-red-500 hover:mix-blend-normal">
            <img className="" src={img.url} alt={img.filename} />
          </div>
          <div className="flex flex-col w-[50%] gap-4 p-10">
            <div className="font-mono">{date.toLocaleDateString()}</div>
            <div className="font-semibold">{title}</div>
            <div className="font-normal text-slate-600">{desc}</div>
            <div className="flex items-center gap-4">
              <button>See Article</button>
              <span className={`${onHover}`}>
                <FaArrowRightLong size={18} />
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
