import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherAutorisationsComponent } from './afficher-autorisations.component';

describe('AfficherAutorisationsComponent', () => {
  let component: AfficherAutorisationsComponent;
  let fixture: ComponentFixture<AfficherAutorisationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherAutorisationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherAutorisationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
