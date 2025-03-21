import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispositionsComponent } from './dispositions.component';

describe('DispositionsComponent', () => {
  let component: DispositionsComponent;
  let fixture: ComponentFixture<DispositionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DispositionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
