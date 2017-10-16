import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestRouteComponent } from './forest-route.component';

describe('ForestRouteComponent', () => {
  let component: ForestRouteComponent;
  let fixture: ComponentFixture<ForestRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForestRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForestRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
