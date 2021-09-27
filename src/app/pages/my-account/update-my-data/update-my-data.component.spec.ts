import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMyDataComponent } from './update-my-data.component';

describe('UpdateMyDataComponent', () => {
  let component: UpdateMyDataComponent;
  let fixture: ComponentFixture<UpdateMyDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMyDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
