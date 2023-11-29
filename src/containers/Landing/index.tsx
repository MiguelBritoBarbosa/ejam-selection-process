import { Steps } from '@/components/Steps';
import { Container } from './styled';
import { MainContent } from '@/components/MainContent';

export default function Landing() {
    return (
        <Container className="container-fluid text-center">
            <div className="container-fluid text-center">
                <h2 className="display-5">Wait! your order in progress.</h2>
                <p className="fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing </p>
            </div>
            <Steps />
            <MainContent />
        </Container>
    );
}
