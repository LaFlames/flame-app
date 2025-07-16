import { fireEvent, screen } from '@testing-library/react';
import Sidebar from 'widgets/Sidebar/Sidebar';
import { renderComponent } from 'shared/lib/tests';
import { useState } from 'react';

describe('Sidebar', () => {
    test('render', () => {
        renderComponent(
            <Sidebar collapsed={false} toggleCollapse={() => {}} />
        );
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('collapse sidebar', () => {
        const Wrapper = () => {
            const [collapsed, setCollapsed] = useState<boolean>(false);
            return (
                <Sidebar
                    collapsed={collapsed}
                    toggleCollapse={() => {
                        setCollapsed((prev) => !prev);
                    }}
                />
            );
        };
        renderComponent(<Wrapper />);

        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        expect(screen.getByTestId('toggleSidebar')).toBeInTheDocument();

        fireEvent.click(screen.getByTestId('toggleSidebar'));

        expect(screen.queryByTestId('sidebar')).toHaveClass('collapsed');
    });
});
