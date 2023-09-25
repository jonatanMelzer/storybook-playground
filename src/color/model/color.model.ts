export interface IColorModel {
    color: string;
    isSelected: boolean;
}

export class ColorModel implements IColorModel {
    color: string;
    isSelected: boolean;

    constructor(color: string, isSelected: boolean) {
        this.color = color;
        this.isSelected = isSelected;
    }
}
