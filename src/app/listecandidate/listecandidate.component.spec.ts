import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecandidateComponent } from './listecandidate.component';

describe('ListecandidateComponent', () => {
  let component: ListecandidateComponent;
  let fixture: ComponentFixture<ListecandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListecandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListecandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
