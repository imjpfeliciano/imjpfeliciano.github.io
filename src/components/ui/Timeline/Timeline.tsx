import TimelineItem from './TimelineItem';

interface TimelineProps {
    items: TimelineItem[];
}

const Timeline = ({ items }: TimelineProps) => {
    return (
        <div>
            {
                items.map((item, index) => {
                    return (
                        <TimelineItem key={index} {...item} isOdd={Boolean(index % 2)} />
                    )
                })
            }
        </div>
    )
};

export default Timeline;