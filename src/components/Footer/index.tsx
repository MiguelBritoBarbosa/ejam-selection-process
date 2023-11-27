import { theme } from '@/styles/theme';
import { ContainerFooter } from './styled';

export const Footer = () => {
    return (
        <ContainerFooter className="p-3 text-center tw-mt-96">
            <h1 style={{ color: theme.colors.primary }}>Footer!</h1>
        </ContainerFooter>
    );
};
