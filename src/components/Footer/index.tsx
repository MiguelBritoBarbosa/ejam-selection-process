import { ContainerFooter } from './styled';
import Image from 'next/image';

export const Footer = () => {
    return (
        <ContainerFooter className="container-fluid p-4 text-white">
            <div className="row d-flex justify-content-between">
                <div className="col-12 col-md-6 row d-flex justify-content-center align-items-center">
                    <div className="col-5 d-flex justify-content-md-end align-items-center">
                        <span className="tw-text-justify">
                            Copyright <i className="bi bi-c-circle"></i> 2023
                        </span>
                    </div>

                    <div className="col-1 d-flex justify-content-center">
                        <Image src="/icons/Line 2.svg" width={5} height={24} alt="Line 2" id="Line 2" />
                    </div>
                    <div className="col-6 d-flex justify-content-start">Clarifionsupport@clarifion.com</div>
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mt-4 mt-md-0">
                    <Image
                        src="/icons/lock_white.svg"
                        width={16}
                        height={16}
                        alt="lock_white"
                        id="lock_white"
                        className="me-2"
                    />
                    Secure 256-bit SSL encryption.
                </div>
            </div>
        </ContainerFooter>
    );
};
