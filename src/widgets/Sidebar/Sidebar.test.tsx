import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation';

describe('Sidebar', () => {
    test('rendered', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('rendered collapsed', () => {
        renderWithTranslation(<Sidebar />);
        fireEvent.click(screen.getByTestId('toggle-sidebar'));
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
