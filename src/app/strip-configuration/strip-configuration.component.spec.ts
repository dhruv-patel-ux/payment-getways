import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StripConfigurationComponent } from './strip-configuration.component';

describe('StripConfigurationComponent', () => {
  let component: StripConfigurationComponent;
  let fixture: ComponentFixture<StripConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StripConfigurationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StripConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
