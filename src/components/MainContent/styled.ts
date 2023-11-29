'use client';
import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.main`
    .container-fluid {
        background-color: #fafafa;
        max-width: 1600px;
    }
    .text-blue {
        color: ${theme.colors.primary};
    }
    .bg-blue {
        background-color: ${theme.colors.primary};
    }
    .bg-light-blue {
        background-color: #edf3fd;
    }
    .btn-success {
        background-color: #59ae43;
        border-color: #59ae43;
    }
    .text-verify {
        color: #5bb59a;
    }

    .information {
        font-size: 9px;
        font-weight: 800;
        border: 1px solid #cfcfcf;
        border-radius: 4px;
    }
    @media (min-width: 992px) {
        .information {
            font-size: 13px;
            font-weight: 600;
            border: 1px solid #cfcfcf;
            border-radius: 4px;
        }
    }
    .stamp {
        font-size: 12px;
    }
    @media (min-width: 992px) {
        .stamp {
            font-size: 16px;
        }
    }
    .checklist {
        font-size: 12px;
    }
    @media (min-width: 992px) {
        .checklist {
            font-size: 12px;
        }
    }
    .row > * {
        padding-right: 0;
        padding-left: 0;
    }
`;
