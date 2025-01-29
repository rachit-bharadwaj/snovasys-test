import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureAppsComponent } from './configure-apps.component';

describe('ConfigureAppsComponent', () => {
  let component: ConfigureAppsComponent;
  let fixture: ComponentFixture<ConfigureAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigureAppsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigureAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
