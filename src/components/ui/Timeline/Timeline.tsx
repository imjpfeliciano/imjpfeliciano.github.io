import TimelineItem from './TimelineItem';

interface TimelineProps {
    items: TimelineItem[];
}

const Timeline = ({ items }: TimelineProps) => {
    return (
        <>
            {
                items.map((item, index) => {
                    return (
                        <TimelineItem key={index} {...item} isOdd={Boolean(index % 2)} />
                    )
                })
            }
        </>
    )
};

export default Timeline;