import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesDetailPageComponent } from './recipes-detail-page.component';

describe('RecipeDetailPageComponent', () => {
  let component: RecipesDetailPageComponent;
  let fixture: ComponentFixture<RecipesDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipesDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipesDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
