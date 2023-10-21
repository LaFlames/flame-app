import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets';
import { componentRender } from 'shared/lib/tests/componentRender';

describe('Sidebar', () => {
    test('rendered', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('rendered collapsed', () => {
        componentRender(<Sidebar />);
        fireEvent.click(screen.getByTestId('toggle-sidebar'));
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
