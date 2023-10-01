import Card from "../Card";

interface TimelineItem {
  title: string;
  company: string;
  date: string;
  description: string;
  color: string;
}

const Title = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-black dark:text-white font-bold text-2xl">{children}</h2>
);

const TimelineItem = ({
  title,
  company,
  date,
  description,
}: TimelineItem) => {
  return (
    <div>
      <Card>
        <div>
          <Title>{title}</Title>
          <h3 className="text-slate-400 text-lg font-semibold">
            {company} - {date}
          </h3>
          <div
            className="text-left text-slate-400 dark:text-slate-400 text-base"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        </div>
      </Card>
    </div>
  );
};

export default TimelineItem;
