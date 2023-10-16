import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../configs/i18n/i18nForTests';

const renderWithTranslation = (component: ReactNode) => render(
    <React.Suspense fallback="">
        <I18nextProvider i18n={i18n}>
            {component}
        </I18nextProvider>
    </React.Suspense>,
);

export default renderWithTranslation;
