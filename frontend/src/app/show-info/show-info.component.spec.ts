import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowINfoComponent } from './show-info.component';

describe('ShowINfoComponent', () => {
  let component: ShowINfoComponent;
  let fixture: ComponentFixture<ShowINfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowINfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowINfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
