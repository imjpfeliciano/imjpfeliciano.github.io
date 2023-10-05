import { experiences } from '../../data/experiences'
import Container from '../ui/Container/Container'
import SectionDescription from '../ui/SectionDescription'
import Timeline from '../ui/Timeline'

const ServicesSection = () => {
    return (
        <Container id="experience">
            <SectionDescription
                title="Professional Experience"
                description="My Resume"
            />

            <div className='flex flex-col gap-4 max-w-screen-md'>
                <Timeline items={experiences} />
            </div>
        </Container>
    )
}

export default ServicesSection
