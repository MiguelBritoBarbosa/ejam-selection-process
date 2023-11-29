'use client';
import styled from 'styled-components';

export const Container = styled.section`
    .step {
        font-size: 8px;
    }
    @media (min-width: 576px) {
        .step {
            font-size: 12px;
        }
    }
    @media (min-width: 992px) {
        .step {
            font-size: 20px;
        }
    }
    .step-image {
        width: 20px;
        height: 20px;
    }
    @media (min-width: 992px) {
        .step-image {
            width: 40px;
            height: 40px;
        }
    }
`;
