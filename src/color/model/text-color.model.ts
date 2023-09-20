import { ColorThemeModel } from "./color-theme.model";
import { ColorModel } from "./color.model";

export enum TextColorUpdateType {
    Font = 'Font',
    Theme = 'Theme'
}

export class TextColorModel {
    updateType: TextColorUpdateType;
    colors: (ColorModel | ColorThemeModel)[];

    constructor(updateType: TextColorUpdateType, colors: (ColorModel | ColorThemeModel)[]) {
        this.updateType = updateType;
        this.colors = colors;
    }
}
