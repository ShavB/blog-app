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
  return (
    <>
      <section className="h-[22rem] w-[60rem] bg-[#ECE8E1] cursor-pointer hover:bg-slate-300">
        <div className="flex flex-2 items-center p-10 mt-3 gap-4">
          <div className="h-full w-[50%] bg-red-500">
            <img className="" src={img.url} alt={img.filename} />
          </div>
          <div className="flex flex-col w-[50%] gap-4 p-10">
            <div className="font-mono">{date.toLocaleDateString()}</div>
            <div className="font-semibold">{title}</div>
            <div className="font-normal text-slate-600">{desc}</div>
            <div>
              <button>See Article</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
