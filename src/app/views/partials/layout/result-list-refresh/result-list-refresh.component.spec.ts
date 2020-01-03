import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultListRefreshComponent } from './result-list-refresh.component';

describe('ResultListRefreshComponent', () => {
  let component: ResultListRefreshComponent;
  let fixture: ComponentFixture<ResultListRefreshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultListRefreshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultListRefreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
