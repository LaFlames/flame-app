export const classNames = (
    className: string,
    mods?: Record<string, boolean | string>,
    additional?: string[]
) => {
    return [
        className,
        ...(additional || []),
        ...Object.entries(mods || {})
            .filter(([_, value]) => Boolean(value))
            .map(([cls, _]) => cls),
    ].join(' ');
};
