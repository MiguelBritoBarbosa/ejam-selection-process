import { Modal } from '@/components/Modal';
import { Container } from './styled';
import Link from 'next/link';

export default function Home() {
    return (
        <Container className='container-fluid text-center'>
            <Modal />
            <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-primary mb-5" data-bs-toggle="modal" data-bs-target="#myModal">
                    Open Bootstrap modal
                </button>
            </div>
            <Link href="/">Landing Page</Link>
        </Container>
    );
}
