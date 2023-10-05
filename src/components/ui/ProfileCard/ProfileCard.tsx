import Card from "../Card";
import Container from "../Container";
import SplashImage from "./SplashImage";

const ProfileCardContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="flex flex-row gap-8 items-center justify-center text-center">
        {children}
    </div>
)

const ProfileCard = () => {
    return (
        <Container>
            <div className="group">
                <ProfileCardContainer>
                    <SplashImage src="https://avatars.githubusercontent.com/u/6007230?v=4" alt="profile-picture" />
                    <div className="grow">
                        <Card>

                            <div className="flex flex-col items-center justify-center">
                                <div className="text-black dark:text-white font-bold">
                                    <h1 className="text-3xl">
                                        Jonathan <span className="text-blue-500 dark:text-lime-400">Peraza F.</span>
                                    </h1>
                                    <h2 className="text-xl">Software Engineer</h2>

                                    <p className="text-base font-normal">Guadalajara, Jalisco, Mexico</p>
                                </div>

                                <div className="text-slate-600 dark:text-slate-400 text-base">
                                    <p>
                                        Jonathan has over 6 years of experience as Software Engineer,
                                        he is adept at solving problems in Frontend and has a deep knowledge of Javascript-based technologies.
                                    </p>

                                    <p>
                                        Jonathan is passionate about teaching and learning new web technologies and has participated in the
                                        development of a social network for a private university in Mexico which impacts thousands of students
                                        using technologies such as Vue.js, GraphQL, using SASS, Storybook to showcase web components.
                                    </p>

                                    <p>
                                        In his free time, he enjoys playing soccer and videogames.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>

                </ProfileCardContainer>
            </div>

        </Container>

    )
}

export default ProfileCard;