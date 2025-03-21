import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailerComponent } from './dailer.component';

describe('DailerComponent', () => {
  let component: DailerComponent;
  let fixture: ComponentFixture<DailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
