import { Container } from './styled';
import Image from 'next/image';

export const Steps = () => {
    return (
        <Container className="container-fluid py-5">
            <div className="row d-flex justify-content-between align-items-center">
                <div className="col-3">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-12 col-lg-2 d-flex justify-content-center">
                                <Image
                                    src="/icons/Correct.svg"
                                    width={40}
                                    height={40}
                                    alt="Correct"
                                    id="Correct"
                                    className="mb-2 mb-lg-0 step-image"
                                />
                            </div>
                            <div className="col-12 col-md-10 ">
                                <div className="step d-flex justify-content-center text-center">
                                    <span className="d-none d-lg-block">Step 1: </span>
                                    <span className="ms-1">Cart Review</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-12 col-lg-2 d-flex justify-content-center">
                                <Image
                                    src="/icons/Correct.svg"
                                    width={40}
                                    height={40}
                                    alt="Correct"
                                    id="Correct"
                                    className="mb-2 mb-lg-0 step-image"
                                />
                            </div>
                            <div className="col-12 col-md-10 ">
                                <div className="step d-flex justify-content-center text-center">
                                    <span className="d-none d-lg-block">Step 2: </span>
                                    <span className="ms-1">Checkout</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-12 col-lg-2 d-flex justify-content-center">
                                <Image
                                    src="/icons/Step3.svg"
                                    width={40}
                                    height={40}
                                    alt="Step3"
                                    id="Step3"
                                    className="mb-2 mb-lg-0 step-image"
                                />
                            </div>
                            <div className="col-12 col-md-10 fw-bold">
                                <div className="step d-flex justify-content-center text-center">
                                    <span className="d-none d-lg-block">Step 3: </span>
                                    <span className="ms-1">Special Offer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-12 col-lg-2 d-flex justify-content-center">
                                <Image
                                    src="/icons/Step4.svg"
                                    width={40}
                                    height={40}
                                    alt="Step4"
                                    id="Step4"
                                    className="mb-2 mb-lg-0 step-image"
                                />
                            </div>
                            <div className="col-12 col-md-10 ">
                                <div className="step d-flex justify-content-center text-center">
                                    <span className="d-none d-lg-block">Step 4: </span>
                                    <span className="ms-1">Confirmation</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};
