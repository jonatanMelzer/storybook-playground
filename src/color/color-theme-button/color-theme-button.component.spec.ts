import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ColorThemeModel } from '../../../model/color-theme.model';
import { ColorThemeButtonComponent } from './color-theme-button.component';

describe('ColorThemeButtonComponent', () => {
    let component: ColorThemeButtonComponent;
    let fixture: ComponentFixture<ColorThemeButtonComponent>;
    const blackColorTheme = new ColorThemeModel('black', 'white', true);

    @Component({
        selector: 'app-checkmark',
        template: '<div>checkmark</div>'
    })
    class MockCheckmarkComponent { }

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                ColorThemeButtonComponent,
                MockCheckmarkComponent
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ColorThemeButtonComponent);
        component = fixture.componentInstance;
        component.color = blackColorTheme;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('onClick', () => {
        it('should emit color theme model', () => {
            spyOn(component.selected, 'emit');
            const divElement = fixture.debugElement.query(By.css('.color-theme__square')).nativeElement;
            divElement.click();

            expect(component.selected.emit).toHaveBeenCalledWith(blackColorTheme);
        });
    });

    describe('binding', () => {
        it('should render checkmark component when color theme is selected', () => {
            fixture.detectChanges();

            const checkmark = fixture.debugElement.query(By.directive(MockCheckmarkComponent));

            expect(checkmark).toBeTruthy();
        });

        it('should not render checkmark component when color theme is not selected', () => {
            blackColorTheme.isSelected = false;
            fixture.detectChanges();

            const checkmark = fixture.debugElement.query(By.directive(MockCheckmarkComponent));

            expect(checkmark).toBeFalsy();
        });
    });
});
