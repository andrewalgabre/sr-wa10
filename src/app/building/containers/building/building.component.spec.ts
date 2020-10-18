import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingComponent } from './building.component';

describe('BuildingComponent', () => {
  let component: BuildingComponent;
  let fixture: ComponentFixture<BuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuildingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have one nickname more', () => {
    component.onAdd('Archy');
    expect(component.data.nicknames.length).toBe(3);
  });

  it('should have one nickname less', () => {
    component.onDelete(0);
    expect(component.data.nicknames.length).toBe(1);
  });

  it('should change the nickname', () => {
    component.onChange({ index: 0, nickname: 'Andrew' });
    expect(component.data.nicknames[0]).toBe('Andrew');
  });
});
