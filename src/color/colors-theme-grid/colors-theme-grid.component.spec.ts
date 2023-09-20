import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ColorThemeModel } from '../../../model/color-theme.model';
import { ColorsThemeGridComponent } from './colors-theme-grid.component';

describe('ColorsThemeGridComponent', () => {
    let component: ColorsThemeGridComponent;
    let fixture: ComponentFixture<ColorsThemeGridComponent>;
    let blackColorTheme: ColorThemeModel;
    let whiteColorTheme: ColorThemeModel;
    let colors: ColorThemeModel[];

    @Component({
        selector: 'app-color-theme-button',
        template: ''
    })
    class MockColorThemeButtonComponent {
        @Input() color: ColorThemeModel;
        @Input() text: string;
        @Output() selected = new EventEmitter<ColorThemeModel>();
    }

    beforeEach(() => {
        blackColorTheme = new ColorThemeModel('black', 'white', true);
        whiteColorTheme = new ColorThemeModel('white', 'black', false);
        colors = [blackColorTheme, whiteColorTheme];
    });

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                ColorsThemeGridComponent,
                MockColorThemeButtonComponent
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ColorsThemeGridComponent);
        component = fixture.componentInstance;
        component.colors = colors;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('select', () => {
        it('should select color', () => {
            component['select'](whiteColorTheme);

            expect(component.colors[0].isSelected).toBe(false);
            expect(component.colors[1].isSelected).toBe(true);
        });

        it('should emit', () => {
            spyOn(component.selected, 'emit');

            component['select'](whiteColorTheme);

            expect(component.selected.emit).toHaveBeenCalledWith(whiteColorTheme);
        });
    });

    describe('binding', () => {
        it('should render color theme button component if there are colors', () => {
            const button = fixture.debugElement.query(By.directive(MockColorThemeButtonComponent));

            expect(button).toBeTruthy();
        });

        it('should not render color theme button component if there are no colors', () => {
            component.colors = [];
            fixture.detectChanges();

            const button = fixture.debugElement.query(By.directive(MockColorThemeButtonComponent));

            expect(button).toBeFalsy();
        });
    });
});
