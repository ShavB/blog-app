import Cards from "@/components/ui/cards";
import { vData } from "@/mockData/valorantMockData";

const HomePage = () => {
  return (
    <>
      <div className="flex mb-4 bg-[#ECE8E1]">
        <div className="h-auto w-96 border-r-2 border-slate-400"></div>
        <div className="">
          <div className="bg-[#ECE8E1] h-auto py-28 p-16 flex flex-col items-center gap-16 justify-center">
            {vData.map((d) => (
              <Cards
                key={d.id}
                title={d.title}
                date={new Date(d.date)}
                desc={d.description}
                img={d.banner}
              />
            ))}
          </div>
        </div>
        <div className="h-screen w-96">
          {/* Right sidebar */}
          Test
        </div>
      </div>
    </>
  );
};

export default HomePage;
