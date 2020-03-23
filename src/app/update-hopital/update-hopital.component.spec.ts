import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHopitalComponent } from './update-hopital.component';

describe('UpdateHopitalComponent', () => {
  let component: UpdateHopitalComponent;
  let fixture: ComponentFixture<UpdateHopitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateHopitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHopitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
