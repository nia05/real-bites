import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesOverviewPageComponent } from './recipes-overview-page.component';

describe('RecipesOverviewPageComponent', () => {
  let component: RecipesOverviewPageComponent;
  let fixture: ComponentFixture<RecipesOverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipesOverviewPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipesOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
