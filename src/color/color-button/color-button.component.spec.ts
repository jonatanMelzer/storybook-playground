import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ColorModel } from '../model/color.model';
import { ColorButtonComponent } from './color-button.component';

describe('ColorButtonComponent', () => {
    let component: ColorButtonComponent;
    let fixture: ComponentFixture<ColorButtonComponent>;
    let blackColorModel: ColorModel;

    @Component({
        selector: 'app-checkmark',
        template: '<div>checkmark</div>'
    })
    class MockCheckmarkComponent { }

    beforeEach(() => {
        blackColorModel = new ColorModel('black', true);
    });

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                ColorButtonComponent,
                MockCheckmarkComponent
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ColorButtonComponent);
        component = fixture.componentInstance;
        component.color = blackColorModel;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('onClick', () => {
        it('should emit color model', () => {
            spyOn(component.selected, 'emit');
            const divElement = fixture.debugElement.query(By.css('.color__square')).nativeElement;
            divElement.click();

            expect(component.selected.emit).toHaveBeenCalledWith(blackColorModel);
        });
    });

    describe('binding', () => {
        it('should render checkmark component when selected', () => {
            component.isSelected = true;
            fixture.detectChanges();

            const checkmark = fixture.debugElement.query(By.directive(MockCheckmarkComponent));

            expect(checkmark).toBeTruthy();
        });

        it('should not render checkmark component when not selected', () => {
            component.isSelected = false;
            fixture.detectChanges();

            const checkmark = fixture.debugElement.query(By.directive(MockCheckmarkComponent));

            expect(checkmark).toBeFalsy();
        });
    });
});
