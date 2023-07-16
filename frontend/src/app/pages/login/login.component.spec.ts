import { ComponentFixture, TestBed } from '@angular/core/testing';

import { logincomponent } from './logincomponent';

describe('logincomponent', () => {
  let component: logincomponent;
  let fixture: ComponentFixture<logincomponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [logincomponent]
    });
    fixture = TestBed.createComponent(logincomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
