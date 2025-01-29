import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductivityProfileComponent } from './productivity-profile.component';

describe('ProductivityProfileComponent', () => {
  let component: ProductivityProfileComponent;
  let fixture: ComponentFixture<ProductivityProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductivityProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductivityProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
