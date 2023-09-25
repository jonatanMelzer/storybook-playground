import { IColorModel } from './color.model';

export interface IColorThemeModel extends IColorModel {
    backgroundColor: string;
}

export class ColorThemeModel implements IColorThemeModel {
    color: string;
    backgroundColor: string;
    isSelected: boolean;

    constructor(color: string, backgroundColor: string, isSelected: boolean) {
        this.color = color;
        this.backgroundColor = backgroundColor;
        this.isSelected = isSelected;
    }
}
