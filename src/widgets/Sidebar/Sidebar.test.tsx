import { screen } from '@testing-library/react';
import Sidebar from 'widgets/Sidebar/Sidebar';
import renderWithTranslation from 'shared/config/i18nForTests';
import React from 'react';

describe('Sidebar', () => {
    test('render', () => {
        renderWithTranslation(<Sidebar toggleCollapse={() => {}} />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
});
