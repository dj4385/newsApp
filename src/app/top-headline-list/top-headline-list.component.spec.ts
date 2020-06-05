import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHeadlineListComponent } from './top-headline-list.component';

describe('TopHeadlineListComponent', () => {
  let component: TopHeadlineListComponent;
  let fixture: ComponentFixture<TopHeadlineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopHeadlineListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopHeadlineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
