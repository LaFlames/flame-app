import { render, screen } from '@testing-library/react';
import Button from 'shared/ui/Button/Button';

describe('Button test', () => {
    test('render', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
    test('have class', () => {
        render(<Button className="red">Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('red');
    });
});
