import { Container } from './styled';
import Image from 'next/image';

export const HeaderSlider = () => {
    return (
        <Container id="headerSlider" className="carousel slide text-white" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="carousel-caption d-flex justify-content-center align-items-center ">
                        <Image
                            src="/icons/fluent_checkmark-starburst-20-regular.svg"
                            width={22}
                            height={22}
                            alt="fluent_checkmark-starburst-20-regular"
                            className="me-2"
                        />
                        30-DAY SATISFACTION GUARANTEE
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-caption d-flex justify-content-center align-items-center">
                        <Image
                            src="/icons/ph_truck-light.svg"
                            width={22}
                            height={22}
                            alt="ph_truck-light"
                            className="me-2"
                        />
                        Free delivery on orders over $40.00
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-caption d-flex justify-content-center align-items-center">
                        <Image
                            src="/icons/mdi_cards-heart-outline.svg"
                            width={22}
                            height={22}
                            alt="mdi_cards-heart-outline"
                            className="me-2"
                        />
                        50.000+ HAPPY CUSTOMERS
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-caption d-flex justify-content-center">
                        <Image
                            src="/icons/fluent_arrow-sync-checkmark-20-regular.svg"
                            width={22}
                            height={22}
                            alt="fluent_arrow-sync-checkmark-20-regular"
                            className="me-2"
                        />
                        100% Money Back Guarantee
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#headerSlider" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#headerSlider" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </Container>
    );
};
