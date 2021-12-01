import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { appReducers } from 'src/app/store/app.reducers';
import { HomepageComponent } from './homepage.component';

describe('HomepageComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                HttpClientModule,
                StoreModule.forRoot(appReducers),
            ],
            declarations: [
                HomepageComponent
            ],
        }).compileComponents();
    });

    it('should create the homepage', () => {
        const fixture = TestBed.createComponent(HomepageComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should render header', () => {
        const fixture = TestBed.createComponent(HomepageComponent);
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.header'))).toBeTruthy();
    });

    it('should render footer', () => {
        const fixture = TestBed.createComponent(HomepageComponent);
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.footer'))).toBeTruthy();
    });
});
