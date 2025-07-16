import { I18nextProvider } from 'react-i18next';
import i18n from '../../config/i18nForTests/i18nForTests';
import { ReactElement } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

export const renderComponent = (component: ReactElement) =>
    render(
        <MemoryRouter initialEntries={['/']}>
            <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
        </MemoryRouter>
    );
