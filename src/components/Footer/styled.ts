'use client';
import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const ContainerFooter = styled.footer`
    background-color: ${theme.colors.backgroundColor};
    font-size: 12px;
    @media (min-width: 992px) {
        font-size: 16px;
    }
`;
