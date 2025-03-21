import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallCompleReportComponent } from './call-comple-report.component';

describe('CallCompleReportComponent', () => {
  let component: CallCompleReportComponent;
  let fixture: ComponentFixture<CallCompleReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallCompleReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallCompleReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
