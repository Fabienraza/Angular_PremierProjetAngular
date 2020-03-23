import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHopitalComponent } from './create-hopital.component';

describe('CreateHopitalComponent', () => {
  let component: CreateHopitalComponent;
  let fixture: ComponentFixture<CreateHopitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateHopitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHopitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
