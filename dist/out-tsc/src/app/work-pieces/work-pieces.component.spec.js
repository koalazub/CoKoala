import { async, TestBed } from '@angular/core/testing';
import { WorkPiecesComponent } from './work-pieces.component';
describe('WorkPiecesComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WorkPiecesComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(WorkPiecesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=work-pieces.component.spec.js.map