import { Container } from './styled';
import Image from 'next/image';

export const MainContent = () => {
    const stars = [0, 1, 2, 3, 4];
    return (
        <Container className="d-flex justify-content-center mb-5">
            <div className="container-fluid p-md-4">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-md-6 d-none d-md-block order-md-1">
                        <Image
                            src="/images/image 4.png"
                            width={575}
                            height={591}
                            alt="image 4"
                            id="image 4"
                            className="img-fluid"
                        />
                        <div className="d-flex justify-content-center py-3 px-5">
                            <div className="col-10 d-none d-md-block bg-white rounded p-4">
                                <div className="row d-flex justify-content-center align-items-center">
                                    <div className="col-12 d-flex">
                                        <Image
                                            src="/images/photo.png"
                                            width={48}
                                            height={48}
                                            alt="photo"
                                            id="photo"
                                            className="img-fluid me-2"
                                        />
                                        <div className="ms-2 row">
                                            <div className="col-12 d-flex">
                                                {stars.map((star) => {
                                                    return (
                                                        <span key={star}>
                                                            <Image
                                                                src="/icons/Star.svg"
                                                                width={14.89}
                                                                height={14.22}
                                                                alt="Star"
                                                                id="Star"
                                                            />
                                                        </span>
                                                    );
                                                })}
                                            </div>
                                            <div className="col-12 d-flex  fw-bold">
                                                Ken T.{' '}
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <Image
                                                        src="/icons/verify 1.svg"
                                                        width={16}
                                                        height={16}
                                                        alt="verify 1"
                                                        id="verify 1"
                                                        className="mx-3"
                                                    />
                                                    <span className="text-verify">Verified Customer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 tw-text-justify">
                                        “As soon as the Clarifions arrived I put one in my bedroom. This was late in the
                                        afternoon. When I went to the bedroom in the evening it smelled clean. When I
                                        went to bed I felt I could breathe better. Wonderful.”
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 row order-md-2 d-flex justify-content-center">
                        <div className="col-12 d-flex">
                            <h3 className="display-5 tw-text-justify">
                                <span className="text-blue">ONE TIME ONLY</span> special price for 6 extra Clarifion for
                                only <span className="text-blue">$14 each</span> ($84.00 total!)
                            </h3>
                        </div>
                        <div className="col-12 d-md-none d-block my-3">
                            <Image
                                src="/images/image 4.png"
                                width={575}
                                height={591}
                                alt="image 4"
                                id="image 4"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-12 d-flex justify-content-between">
                            <div
                                className="col-2 bg-blue rounded d-flex align-items-center"
                                style={{ maxWidth: 134, minWidth: 80, maxHeight: 134, minHeight: 80 }}
                            >
                                <Image
                                    src="/images/image-removebg.png"
                                    width={134}
                                    height={134}
                                    alt="image-removebg"
                                    id="image-removebg"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="col-9">
                                <div className=" d-flex justify-content-between">
                                    <span>Clarifion Air Ionizer</span>
                                    <div>
                                        <s className="text-secondary">$180</s>{' '}
                                        <span className="text-blue fs-5 ">$84</span>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    {stars.map((star) => {
                                        return (
                                            <span key={star}>
                                                <Image
                                                    src="/icons/Star.svg"
                                                    width={14.89}
                                                    height={14.22}
                                                    alt="Star"
                                                    id="Star"
                                                />
                                            </span>
                                        );
                                    })}
                                </div>
                                <div className=" d-flex align-items-center">
                                    <Image src="/icons/point.svg" width={16} height={16} alt="point" id="point" />
                                    <span className="ms-4">12 left in Stock</span>
                                </div>
                                <p className="tw-text-justify fs-5 d-none d-md-block">
                                    Simply plug a Clarifion into any standard outlet and replace bulky, expensive air
                                    purifiers with a simple.
                                </p>
                            </div>
                        </div>
                        <p className="tw-text-justify d-block d-md-none">
                            Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers
                            with a simple.
                        </p>
                        <div className="col-12 row d-flex justify-content-start">
                            <div className="col-12 d-flex justify-content-start">
                                <p className="checklist">
                                    <Image
                                        src="/icons/tick-circle.svg"
                                        width={22}
                                        height={22}
                                        alt="tick-circle"
                                        id="tick-circle"
                                        className="me-2 "
                                    />
                                    Negative Ion Technology may <b>help with allergens</b>
                                </p>
                            </div>
                            <div className="col-12 d-flex justify-content-start">
                                <p className="checklist">
                                    <Image
                                        src="/icons/tick-circle.svg"
                                        width={22}
                                        height={22}
                                        alt="tick-circle"
                                        id="tick-circle"
                                        className="me-2 "
                                    />
                                    Designed for <b>hair rejuvenation</b>
                                </p>
                            </div>
                            <div className="col-12 d-flex justify-content-start">
                                <p className="checklist">
                                    <Image
                                        src="/icons/tick-circle.svg"
                                        width={22}
                                        height={22}
                                        alt="tick-circle"
                                        id="tick-circle"
                                        className="me-2 "
                                    />
                                    <b>Perfect for every room</b> in all types of places.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center align-items-center bg-light-blue rounded p-2">
                            <Image
                                src="/icons/percentage.svg"
                                width={32}
                                height={32}
                                alt="percentage"
                                id="percentage"
                                className="me-2 "
                            />
                            <div className="tw-text-justify">
                                Save <span className="text-blue">53%</span> and get{' '}
                                <span className="text-blue">6 extra Clarifision</span> for only{' '}
                                <span className="text-blue"> $14 Each</span>
                            </div>
                        </div>
                        <div className="col-12 mt-4 row d-flex justify-content-center align-items-center">
                            <div className="col-12">
                                <div className="d-grid">
                                    <a
                                        className="btn btn-success btn-block rounded-pill fs-4 p-3 text-white text-decoration-none"
                                        href="#"
                                    >
                                        YES - CLAIM MY DISCOUNT <i className="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 mt-3 row py-2 information d-flex justify-content-center align-items-center">
                                <div className="col-12 col-lg-8 row d-flex justify-content-center align-items-center">
                                    <div className="col-4">Free Shipping </div>
                                    <div className="col-1 col-lg-1">
                                        <Image
                                            src="/icons/pipeLine.svg"
                                            width={1}
                                            height={16}
                                            alt="pipeLine"
                                            id="pipeLine"
                                            className="me-2"
                                        />
                                    </div>
                                    <div className="col-6 d-flex align-items-center">
                                        <Image
                                            src="/icons/lock.svg"
                                            width={12}
                                            height={12}
                                            alt="lock"
                                            id="lock"
                                            className="me-2"
                                        />
                                        Secure 256-Bit SSL Encryption.
                                    </div>
                                    <div className="col-1 d-none d-lg-block">
                                        <Image
                                            src="/icons/pipeLine.svg"
                                            width={1}
                                            height={16}
                                            alt="pipeLine"
                                            id="pipeLine"
                                            className="me-2"
                                        />
                                    </div>
                                </div>
                                <hr className="mt-2 mb-1 d-block d-lg-none" />
                                <div className="col-12 col-lg-4">
                                    <Image src="/icons/cards.svg" width={160} height={14} alt="cards" id="cards" />
                                </div>
                            </div>
                            <div className="col-12 mt-3 fw-bold">
                                <a href="#" className="text-danger">
                                    NO THANKS, I DON&apos;T WANT THIS.
                                </a>
                            </div>
                            <div className="col-12 row stamp mt-4">
                                <div className="col-4">
                                    <Image
                                        src="/images/image 6.png"
                                        width={88}
                                        height={88}
                                        alt="image 6"
                                        id="image 6"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="col-8 tw-text-justify">
                                    If you are not completely thrilled with your Clarifion - We have a{' '}
                                    <b>30 day satisfaction guarantee</b>. Please refer to our return policy at the
                                    bottom of the page for more details. Happy Shopping!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};
