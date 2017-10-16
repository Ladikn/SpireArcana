import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TowerRouteComponent } from './tower-route.component';

describe('TowerRouteComponent', () => {
  let component: TowerRouteComponent;
  let fixture: ComponentFixture<TowerRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TowerRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TowerRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
