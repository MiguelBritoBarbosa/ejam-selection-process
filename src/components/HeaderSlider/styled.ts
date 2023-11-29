'use client';
import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${theme.colors.backgroundColor};
    .carousel-caption {
        position: relative;
        right: 0;
        left: 0;
        bottom: 0;
        padding-top: 0;
        padding-bottom: 0;
        font-size: 12px;
    }
    .carousel-control-prev {
        left: -40px;
    }
    .carousel-control-next {
        right: -40px;
    }
`;
