
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewpaymentPage } from './newpayment.page';

describe('NewpaymentPage', () => {
  let component: NewpaymentPage;
  let fixture: ComponentFixture<NewpaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewpaymentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
