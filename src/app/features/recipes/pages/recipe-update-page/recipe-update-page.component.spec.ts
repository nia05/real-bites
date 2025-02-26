import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeUpdatePageComponent } from './recipe-update-page.component';

describe('RecipeUpdatePageComponent', () => {
  let component: RecipeUpdatePageComponent;
  let fixture: ComponentFixture<RecipeUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeUpdatePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
