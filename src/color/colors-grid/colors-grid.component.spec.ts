import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ColorModel } from '../model/color.model';
import { ColorsGridComponent } from './colors-grid.component';

describe('ColorsGridComponent', () => {
    let component: ColorsGridComponent;
    let fixture: ComponentFixture<ColorsGridComponent>;
    let blackColorModel: ColorModel;
    let whiteColorModel: ColorModel;
    let colors: ColorModel[];

    @Component({
        selector: 'app-color-button',
        template: ''
    })
    class MockColorButtonComponent {
        @Input() color: ColorModel;
        @Input() isSelected: boolean;
        @Output() selected = new EventEmitter<ColorModel>();
    }

    beforeEach(() => {
        blackColorModel = new ColorModel('black', true);
        whiteColorModel = new ColorModel('white', false);
        colors = [blackColorModel, whiteColorModel];
    });

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                ColorsGridComponent,
                MockColorButtonComponent
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ColorsGridComponent);
        component = fixture.componentInstance;
        component.colors = colors;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('select', () => {
        it('should be changed to true when the color is selected and for other items isSelected should be false', () => {
            component['select'](whiteColorModel);

            expect(component.colors[0].isSelected).toBe(false);
            expect(component.colors[1].isSelected).toBe(true);
        });

        it('should emit', () => {
            spyOn(component.selected, 'emit');

            component['select'](whiteColorModel);

            expect(component.selected.emit).toHaveBeenCalledWith(whiteColorModel);
        });
    });

    describe('binding', () => {
        it('should render color button component if there are colors', () => {
            const button = fixture.debugElement.query(By.directive(MockColorButtonComponent));

            expect(button).toBeTruthy();
        });

        it('should not render color button component if there are no colors', () => {
            component.colors = [];
            fixture.detectChanges();

            const button = fixture.debugElement.query(By.directive(MockColorButtonComponent));

            expect(button).toBeFalsy();
        });
    });
});
