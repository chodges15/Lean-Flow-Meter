import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatTableModule} from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { PullRequestTableComponent } from './pull-request-table.component';

describe('PullRequestTableComponent', () => {
  let component: PullRequestTableComponent;
  let fixture: ComponentFixture<PullRequestTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PullRequestTableComponent ],
      imports: [MatTableModule,
                BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PullRequestTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});