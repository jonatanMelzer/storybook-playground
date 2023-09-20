import { Component, DebugElement, EventEmitter, Input, Output, Pipe, PipeTransform, SimpleChange, SimpleChanges } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ColorThemeModel } from '../../../model/color-theme.model';
import { ColorModel } from '../../../model/color.model';
import { TextColorModel, TextColorUpdateType } from '../../../model/text-color.model';
import { TextColorPickerDropdownComponent } from './text-color-picker-dropdown.component';

describe('TextColorPickerDropdownComponent', () => {
    let component: TextColorPickerDropdownComponent;
    let fixture: ComponentFixture<TextColorPickerDropdownComponent>;
    let debugElement: DebugElement;

    let blackColor: ColorModel;
    let whiteColor: ColorModel;
    let colors: ColorModel[];
    let blackColorTheme: ColorThemeModel;
    let whiteColorTheme: ColorThemeModel;
    let colorsTheme: ColorThemeModel[];
    let textColorModel: TextColorModel;

    @Pipe({ name: 'translate' })
    class MockTranslatePipe implements PipeTransform {
        transform(value: string): string {
            return 'TRANSLATED: ' + value;
        }
    }

    @Component({
        selector: 'app-colors-grid',
        template: '<div></div>'
    })
    class MockColorsGridComponent {
        @Input() colors: ColorModel[];
        @Output() selected = new EventEmitter<ColorModel>();
    }

    @Component({
        selector: 'app-colors-theme-grid',
        template: '<div></div>'
    })
    class MockColorsThemeGridComponent {
        @Input() colors: ColorThemeModel[];
        @Output() selected = new EventEmitter<ColorThemeModel>();
    }

    beforeEach(() => {
        blackColor = new ColorModel('black', true);
        whiteColor = new ColorModel('white', false);
        colors = [blackColor, whiteColor];
        blackColorTheme = new ColorThemeModel('black', 'white', true);
        whiteColorTheme = new ColorThemeModel('white', 'black', false);
        colorsTheme = [blackColorTheme, whiteColorTheme];
        textColorModel = new TextColorModel(TextColorUpdateType.Font, colors);
    });

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                TextColorPickerDropdownComponent,
                MockTranslatePipe,
                MockColorsGridComponent,
                MockColorsThemeGridComponent
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(TextColorPickerDropdownComponent);
        debugElement = fixture.debugElement;
        component = fixture.componentInstance;
        component.text = textColorModel;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('ngOnInit', () => {
        it('should have selected a color model', () => {
            expect(component['selectedColor']).toBe(blackColor);
        });
    });

    describe('ngOnChanges', () => {
        it('should set selected color on changes', () => {
            blackColor.isSelected = false;
            whiteColor.isSelected = true;
            component.ngOnChanges(<SimpleChanges>{ text: <SimpleChange>{ currentValue: <TextColorModel>{ colors } } });

            expect(component['selectedColor']).toBe(whiteColor);
        });
    });

    describe('onSelectedColor', () => {
        it('should emit selected color', () => {
            spyOn(component.selected, 'emit');

            const colorsGridEl = debugElement.query(By.directive(MockColorsGridComponent));
            const colorsGrid = colorsGridEl.injector.get(MockColorsGridComponent);
            colorsGrid.selected.emit(whiteColor);

            expect(component.selected.emit).toHaveBeenCalledWith(whiteColor);
            expect(component['selectedColor']).toBe(whiteColor);
        });

        it('should emit selected color theme', () => {
            spyOn(component.selected, 'emit');
            textColorModel.colors = colorsTheme;
            textColorModel.updateType = TextColorUpdateType.Theme;
            fixture.detectChanges();

            const colorsGridEl = debugElement.query(By.directive(MockColorsThemeGridComponent));
            const colorsGrid = colorsGridEl.injector.get(MockColorsThemeGridComponent);
            colorsGrid.selected.emit(whiteColorTheme);

            expect(component.selected.emit).toHaveBeenCalledWith(whiteColorTheme);
            expect(component['selectedColor']).toBe(whiteColorTheme);
        });
    });
});
