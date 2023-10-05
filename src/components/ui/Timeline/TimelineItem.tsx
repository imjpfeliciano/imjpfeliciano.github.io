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
      <div className="text-center">
        <h3 className="text-slate-800 dark:text-slate-500 text-lg font-light">
          {`${company} { ${date} }`}
        </h3>
        <h2 className="text-black dark:text-white font-bold text-xl">{title}</h2>

        <div
          className="text-slate-600 dark:text-slate-400 text-base mt-2"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </div>

    </Card>
  );
};

export default TimelineItem;
