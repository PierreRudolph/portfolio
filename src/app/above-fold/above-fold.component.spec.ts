import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboveFoldComponent } from './above-fold.component';

describe('AboveFoldComponent', () => {
  let component: AboveFoldComponent;
  let fixture: ComponentFixture<AboveFoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboveFoldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboveFoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
