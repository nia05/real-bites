import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesUpdatePageComponent } from './recipes-update-page.component';

describe('RecipesUpdatePageComponent', () => {
  let component: RecipesUpdatePageComponent;
  let fixture: ComponentFixture<RecipesUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipesUpdatePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipesUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
