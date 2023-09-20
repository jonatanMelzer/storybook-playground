export interface IColor {
    color: string;
}

export class ColorModel implements IColor {
    color: string;
    isSelected: boolean;

    constructor(color: string, isSelected: boolean) {
        this.color = color;
        this.isSelected = isSelected;
    }
}
