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
                        <TimelineItem key={index} {...item} isLast={index === items.length - 1} />
                    )
                })
            }
        </>
    )
};

export default Timeline;