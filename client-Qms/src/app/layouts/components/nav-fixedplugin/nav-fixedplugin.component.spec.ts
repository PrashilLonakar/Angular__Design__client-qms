import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFixedpluginComponent } from './nav-fixedplugin.component';

describe('NavFixedpluginComponent', () => {
  let component: NavFixedpluginComponent;
  let fixture: ComponentFixture<NavFixedpluginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavFixedpluginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavFixedpluginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
