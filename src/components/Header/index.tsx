import Image from 'next/image';
import { ContainerHeader, HeaderTop } from './styled';
import { HeaderSlider } from '../HeaderSlider';

export const Header = () => {
    return (
        <ContainerHeader>
            <HeaderTop className="text-white py-3 px-5 ">
                <div className="d-none d-md-block">
                    <div className="row px-5">
                        <div className="col-3 d-flex justify-content-center align-items-center">
                            <span className="small-text">
                                <Image
                                    src="/icons/fluent_checkmark-starburst-20-regular.svg"
                                    width={22}
                                    height={22}
                                    alt="fluent_checkmark-starburst-20-regular"
                                    className="me-2"
                                />
                                30-DAY SATISFACTION GUARANTEE
                            </span>
                        </div>
                        <div className="col-3 d-flex justify-content-center align-items-center">
                            <span className="small-text">
                                <Image
                                    src="/icons/ph_truck-light.svg"
                                    width={22}
                                    height={22}
                                    alt="ph_truck-light"
                                    className="me-2"
                                />
                                Free delivery on orders over $40.00
                            </span>
                        </div>
                        <div className="col-3 d-flex justify-content-center align-items-center">
                            <span className="small-text">
                                <Image
                                    src="/icons/mdi_cards-heart-outline.svg"
                                    width={22}
                                    height={22}
                                    alt="mdi_cards-heart-outline"
                                    className="me-2"
                                />
                                50.000+ HAPPY CUSTOMERS
                            </span>
                        </div>
                        <div className="col-3 d-flex justify-content-center">
                            <span className="small-text">
                                <Image
                                    src="/icons/fluent_arrow-sync-checkmark-20-regular.svg"
                                    width={22}
                                    height={22}
                                    alt="fluent_arrow-sync-checkmark-20-regular"
                                    className="me-2"
                                />
                                100% Money Back Guarantee
                            </span>
                        </div>
                    </div>
                </div>
                <div className="d-block d-md-none">
                    <HeaderSlider />
                </div>
            </HeaderTop>
            <div className="container-fluid py-4 d-flex justify-content-between align-items-center">
                <div className="col-4 d-flex justify-content-center align-items-center">
                    <Image
                        src="/images/Clarifion_Logo1.png"
                        width={192}
                        height={36}
                        alt="Clarifion_Logo1"
                        id="Clarifion_Logo1"
                        className="img-fluid"
                    />
                </div>
                <div className="col-4 d-flex justify-content-center align-items-center">
                    <div className="row ms-md-4">
                        <div className="col-6">
                            <Image
                                src="/images/McAfee_Secure.png"
                                width={88}
                                height={32}
                                alt="McAfee_Secure"
                                id="McAfee_Secure"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-6">
                            <Image
                                src="/images/norton-antivirus-logo.png"
                                width={82}
                                height={32}
                                alt="norton-antivirus-logo"
                                id="norton-antivirus-logo"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </ContainerHeader>
    );
};
