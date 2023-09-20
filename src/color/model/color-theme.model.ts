import { IColor } from './color.model';

export interface IColorTheme extends IColor {
    backgroundColor: string;
}

export class ColorThemeModel implements IColorTheme {
    color: string;
    backgroundColor: string;
    isSelected: boolean;

    constructor(color: string, backgroundColor: string, isSelected: boolean) {
        this.color = color;
        this.backgroundColor = backgroundColor;
        this.isSelected = isSelected;
    }
}
