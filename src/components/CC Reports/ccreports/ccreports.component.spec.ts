import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCreportsComponent } from './ccreports.component';

describe('CCreportsComponent', () => {
  let component: CCreportsComponent;
  let fixture: ComponentFixture<CCreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CCreportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CCreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
