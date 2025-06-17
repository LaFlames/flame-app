import { classNames } from './classNames';

describe('classNames', () => {
    test('main class', () => {
        expect(classNames('class')).toBe('class');
    });
    test('with additional class', () => {
        expect(classNames('class', {}, ['additional'])).toBe(
            'class additional'
        );
    });
    test('with mods', () => {
        expect(classNames('class', { hovered: true }, [])).toBe(
            'class hovered'
        );
    });
    test('with undefined mode', () => {
        expect(classNames('class', { hovered: undefined }, [])).toBe('class');
    });
});
