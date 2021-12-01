import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { InputComponent } from './input.component';

describe('InputComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                InputComponent
            ],
        }).compileComponents();
    });

    it('should create the input', () => {
        const fixture = TestBed.createComponent(InputComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as placeholder 'Pesquise por um Pokemon'`, () => {
        const fixture = TestBed.createComponent(InputComponent);
        const app = fixture.componentInstance;
        app.placeholder = 'Pesquise por um Pokemon'
        expect(app.placeholder).toEqual('Pesquise por um Pokemon');
    });

    it('should render icon', () => {
        const fixture = TestBed.createComponent(InputComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('img')?.src).toContain('https://img.icons8.com/ios/50/000000/search--v1.png');
    });
});
