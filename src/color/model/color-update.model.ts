import { IColorThemeModel } from "./color-theme.model";
import { IColorModel } from "./color.model";

export enum ColorUpdateType {
    Font = 'Font',
    Theme = 'Theme'
}

export class ColorUpdateModel {
    updateType: ColorUpdateType;
    colors: IColorModel[] | undefined;
    themeColors: IColorThemeModel[] | undefined;

    constructor(updateType: ColorUpdateType, colors: (IColorModel | IColorThemeModel)[]) {
        this.updateType = updateType;
        switch(updateType){
            case ColorUpdateType.Font:
                this.colors = colors;
                break;
            case ColorUpdateType.Theme:
                this.themeColors = colors as IColorThemeModel[];
                break;
        }
    }
}
