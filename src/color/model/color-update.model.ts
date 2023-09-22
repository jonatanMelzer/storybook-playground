import { ColorThemeModel } from "./color-theme.model";
import { ColorModel } from "./color.model";

export enum ColorUpdateType {
    Font = 'Font',
    Theme = 'Theme'
}

export class ColorUpdateModel {
    updateType: ColorUpdateType;
    colors: (ColorModel | ColorThemeModel)[];

    constructor(updateType: ColorUpdateType, colors: (ColorModel | ColorThemeModel)[]) {
        this.updateType = updateType;
        this.colors = colors;
    }
}
