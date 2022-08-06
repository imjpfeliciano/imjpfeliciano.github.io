import styled from "styled-components";
import Card from "../Card";
import Container from "../Container";

const ProfileCardContainer = styled.div`
    position: relative;
    margin-top: 8rem;
    text-align: center;
    color: ${props => props.theme.colors.gray};
`;

const Avatar = styled.img`
    width: 150px;
    height: 150px;
    position: absolute;
    top: -75px;;
    left: calc(50% - 75px);
    border-radius: 50%;
`;

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;
    margin-left: 2rem;
    margin-right: 2rem;
`;


const TitleContainer = styled.div`
    h1 {
        font-size: 2.25rem;
        color: ${props => props.theme.colors.black};

        span {
            color: ${props => props.theme.colors.primaryDark};
        }
    }
`;

const ProfileDescription = styled.div`
    border-top: 1px solid ${props => props.theme.colors.blueGray};
`;

const ProfileCard = () => {
    return (
        <Container>
            <ProfileCardContainer>
                <Avatar src="/assets/pp-wl.jpeg" />
                <Card>
                    <ProfileContainer>
                        <TitleContainer>
                            <h1>Jonathan <span>Peraza F.</span></h1>
                            <h4>Software Engineer</h4>

                            <p>Guadalajara, Jalisco, Mexico</p>
                        </TitleContainer>

                        <ProfileDescription>
                            <p>
                                Jonathan has over 6 years of experience as Software Engineer, he is adept at solving problems in Frontend and has a deep knowledge of Javascript-based technologies.

                            </p>

                            <p>
                                Jonathan is passionate about teaching and learning new web technologies and has participated in the development of a social network for a private university in Mexico which impacts thousands of students using technologies such as Vue.js, GraphQL, using SASS, Storybook to showcase web components.

                            </p>

                            <p>
                                In his free time, he enjoys playing soccer and videogames.

                            </p>
                        </ProfileDescription>
                    </ProfileContainer>
                </Card>
            </ProfileCardContainer>
        </Container>

    )
}

export default ProfileCard;