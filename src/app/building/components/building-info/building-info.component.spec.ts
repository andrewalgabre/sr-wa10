import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingInfoComponent } from './building-info.component';

describe('BuildingInfoComponent', () => {
  let component: BuildingInfoComponent;
  let fixture: ComponentFixture<BuildingInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuildingInfoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not diplay any address and description', () => {
    expect(component.address).toBe('');
    expect(component.description).toBe('');
  });

  it('should diplay address and description', () => {
    component.address = '30 St Mary Axe, London';
    component.description = 'Mythenschloss';
    expect(component.address).toBe('30 St Mary Axe, London');
    expect(component.description).toBe('Mythenschloss');
  });
});
