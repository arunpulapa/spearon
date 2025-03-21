import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAutoDailerComponent } from './create-auto-dailer.component';

describe('CreateAutoDailerComponent', () => {
  let component: CreateAutoDailerComponent;
  let fixture: ComponentFixture<CreateAutoDailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAutoDailerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAutoDailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
