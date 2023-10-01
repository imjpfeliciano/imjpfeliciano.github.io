import Card from "../Card";

interface TimelineItem {
  title: string;
  company: string;
  date: string;
  description: string;
  color: string;
}

// const Title = styled.h2`
//   font-size: 2rem;
//   position: relative;
//   font-weight: bold;

//   /* Timeline dot */
//   &::before {
//     content: "";
//     position: absolute;
//     width: 10px;
//     height: 10px;
//     border-radius: 50%;
//     background-color: ${({ theme }) => theme.colors.primaryDark};
//     border: 3px solid ${({ theme }) => theme.colors.primaryDark};
//     top: 15px;
//   }
// `;

const Title = ({ children }) => (
  <h2 className="text-black dark:text-white font-bold text-2xl">{children}</h2>
);

// const TimelineItemContainer = styled.div`
//   position: relative;
//   width: 100%;

//   &:nth-child(odd) {
//     padding: 30px 0 30px 30px;

//     &:before {
//       left: 0;
//       top: -5px;
//       bottom: -5px;
//       border-width: 5px 0 5px 5px;
//       border-radius: 50px 0 0 50px;
//     }

//     ${Title} {
//       text-align: left;

//       &::before {
//         left: -67px;
//       }
//     }
//   }

//   &:nth-child(even) {
//     text-align: right;
//     padding: 30px 30px 30px 0;

//     &:before {
//       right: 0;
//       top: 0;
//       bottom: 0;
//       border-width: 5px 5px 5px 0;
//       border-radius: 0 50px 50px 0;
//     }

//     ${Title}::before {
//       right: -67px;
//     }
//   }

//   &:first-of-type::before {
//     border-top: 0;
//     border-top-left-radius: 0;
//   }

//   &:last-of-type {
//     &:nth-child(odd)::before {
//       border-bottom-left-radius: 0;
//       border-bottom: 0;
//     }

//     &:nth-child(even)::before {
//       border-bottom-right-radius: 0;
//       border-bottom: 0;
//     }
//   }

//   &:before {
//     content: "";
//     position: absolute;
//     width: 50%;
//     border: solid ${({ theme }) => theme.colors.primaryDark};
//   }
// `;

// const Description = styled.div`
//   text-align: left;
//   color: ${({ theme }) => theme.font.color.primary};
// `;

// const CardContent = styled.div`
//   padding: 1rem;
// `;

// const Subtitle = styled.h2`
//   color: ${({ theme }) => theme.font.color.secondary};
// `;

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
