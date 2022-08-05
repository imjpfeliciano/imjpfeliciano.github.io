import styled from 'styled-components';

interface TimelineItem {
    title: string;
    company: string;
    date: string;
    description: string;
    companyUrl?: string;
    companyLogo: string;
    isOdd?: boolean;
    color: string;
}

interface ItemColor {
    bgColor: string;
}

const TimelineItemContainer = styled.div<{ isOdd: Boolean }>`
    display: flex;
    flex-direction: ${props => props.isOdd ? 'row-reverse' : 'row'};
    justify-content: center;
    align-items: center;

    margin-bottom: 1rem;
    color: ${props => props.theme.colors.gray};
`;

const CompanyLogoContainer = styled.div<ItemColor>`
    width: 100px;
    height: 100px;
    border: 8px solid ${props => props.bgColor};
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const Logo = styled.img`
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const Separator = styled.div<ItemColor>``;

const VerticalSeparator = styled.div<ItemColor>`
    width: 48px;
    height: 180px;
    background-color: ${props => props.bgColor};
    margin-left: 1rem;
    margin-right: 1rem;
    border-radius: 25px;
`;

const ItemContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: calc(100% - 28px);
`;

const Date = styled.h2`
    color: ${props => props.theme.colors.black};
    font-family: monospace;
    font-size: 4rem;
    margin: 0 auto;
`;
const Title = styled.h4<ItemColor>`
    color: ${props => props.bgColor};
    text-transform: uppercase;
`

const CompanyCardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    padding: 2rem;
`;

const TimelineItem = ({
    title,
    company,
    date,
    description,
    companyUrl,
    companyLogo,
    isOdd = false,
    color,
}: TimelineItem) => {
    return (
        <TimelineItemContainer isOdd={isOdd}>
            <ItemContentContainer>
                <CompanyLogoContainer bgColor={color}>
                    <Logo src={companyLogo} alt="company-logo" />
                </CompanyLogoContainer>
                <Separator bgColor={color} />
            </ItemContentContainer>

            <VerticalSeparator bgColor={color} />

            <ItemContentContainer>
                <CompanyCardContent>
                    <Date>{date}</Date>
                    <Separator bgColor={color} />
                    <Title bgColor={color}>{company} - {title}</Title>
                    <div dangerouslySetInnerHTML={{ __html: description }} />
                </CompanyCardContent>
                
            </ItemContentContainer>

        </TimelineItemContainer>
    )
}

export default TimelineItem;