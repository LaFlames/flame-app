import { render, screen } from '@testing-library/react';
import { Button } from 'shared/components';

describe('Button', () => {
    test('rendered', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
});
