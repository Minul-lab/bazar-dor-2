import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface IProducts {
  id: number;
  
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: string;
  yesterday: string;
  lastWeek: string;
  lastMonth: string;
  change: {
    dir: string;
    pct: number;
  };
  markets: object[];
}

const Marquee = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
  const data = await res.json();
  console.log(data);

  return (
    <div >
      <MarqueeText className="py-2" direction="right" duration={10}>
        <span className="text-sm flex gap-5">
          {data.map((d: IProducts) => {
            return (
              <span key={d.id}>
                {d.categoryIcon} {d.nameBn}{" "}
                <span className="text-gray-600">{d.today} টাকা/কেজি</span>{" "}
                {d.change.dir === "up" ? (
                  <span className="text-xs text-red-700">
                    ▲ {d.change.pct}%
                  </span>
                ) : (
                  <span className="text-xs text-[#05893E]">
                    ▼ {d.change.pct}%
                  </span>
                )}
              </span>
            );
          })}
        </span>
      </MarqueeText>
    </div>
  );
};

export default Marquee;
