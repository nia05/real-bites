import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCreatePageComponent } from './recipe-create-page.component';

describe('RecipeCreatePageComponent', () => {
  let component: RecipeCreatePageComponent;
  let fixture: ComponentFixture<RecipeCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeCreatePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
