'use client';
import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const ContainerHeader = styled.header`
    .small-text {
        font-size: 15px;
    }
    #Clarifion_Logo1 {
        min-width: 106.67px;
        min-height: 20px;
    }
    #McAfee_Secure {
        min-width: 44px;
        min-height: 16px;
    }
    #norton-antivirus-logo {
        min-width: 41px;
        min-height: 16px;
    }
`;

export const HeaderTop = styled.section`
    background-color: ${theme.colors.backgroundColor};
`;
