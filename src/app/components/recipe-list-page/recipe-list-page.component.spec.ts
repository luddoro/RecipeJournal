import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeListPageComponent } from './recipe-list-page.component';

describe('RecipeListPageComponent', () => {
  let component: RecipeListPageComponent;
  let fixture: ComponentFixture<RecipeListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
