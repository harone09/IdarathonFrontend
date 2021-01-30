import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRoulementComponent } from './update-roulement.component';

describe('UpdateRoulementComponent', () => {
  let component: UpdateRoulementComponent;
  let fixture: ComponentFixture<UpdateRoulementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRoulementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRoulementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
