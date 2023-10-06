import Card from "../Card";

interface TimelineItem {
  title: string;
  company: string;
  date: string;
  description: string;
  color: string;
}

const TimelineItem: React.FC<TimelineItem> = ({
  title,
  company,
  date,
  description,
}) => {
  return (
    <Card>
      <div className="flex flex-row gap-4">
        <div className="w-1/3">
          <h3 className="text-slate-800 dark:text-slate-500 text-lg font-light">
            {`${company} { ${date} }`}
          </h3>
          <h2 className="text-black dark:text-white font-bold text-xl">{title}</h2>
        </div>

        <div
          className="text-slate-600 dark:text-slate-400 text-base w-2/3"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </div>
    </Card>
  );
};

export default TimelineItem;
