import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubprojectComponent } from './githubproject.component';

describe('GithubprojectComponent', () => {
  let component: GithubprojectComponent;
  let fixture: ComponentFixture<GithubprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
