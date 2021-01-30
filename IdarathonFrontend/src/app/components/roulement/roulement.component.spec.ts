import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoulementComponent } from './roulement.component';

describe('RoulementComponent', () => {
  let component: RoulementComponent;
  let fixture: ComponentFixture<RoulementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoulementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoulementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
