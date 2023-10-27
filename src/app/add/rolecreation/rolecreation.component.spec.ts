import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolecreationComponent } from './rolecreation.component';

describe('RolecreationComponent', () => {
  let component: RolecreationComponent;
  let fixture: ComponentFixture<RolecreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RolecreationComponent]
    });
    fixture = TestBed.createComponent(RolecreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
