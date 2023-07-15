type Mods = Record<string, boolean | string>


export function classNames(cls: string, mods: Mods, additional: string[]): string {
    const filteredMods = Object.entries(mods).filter(([, value]) => Boolean(value)).map(([className]) => className)

    return [cls, ...additional, ...filteredMods].join(' ')
}


