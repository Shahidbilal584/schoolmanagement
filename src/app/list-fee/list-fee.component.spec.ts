import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFeeComponent } from './list-fee.component';

describe('ListFeeComponent', () => {
  let component: ListFeeComponent;
  let fixture: ComponentFixture<ListFeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListFeeComponent]
    });
    fixture = TestBed.createComponent(ListFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
