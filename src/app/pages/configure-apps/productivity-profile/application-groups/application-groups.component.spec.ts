import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationGroupsComponent } from './application-groups.component';

describe('ApplicationGroupsComponent', () => {
  let component: ApplicationGroupsComponent;
  let fixture: ComponentFixture<ApplicationGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationGroupsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
