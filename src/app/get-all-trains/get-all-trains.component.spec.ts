import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllTrainsComponent } from './get-all-trains.component';

describe('GetAllTrainsComponent', () => {
  let component: GetAllTrainsComponent;
  let fixture: ComponentFixture<GetAllTrainsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAllTrainsComponent]
    });
    fixture = TestBed.createComponent(GetAllTrainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
