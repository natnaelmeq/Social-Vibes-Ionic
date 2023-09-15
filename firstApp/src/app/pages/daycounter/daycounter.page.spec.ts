import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DaycounterPage } from './daycounter.page';

describe('DaycounterPage', () => {
  let component: DaycounterPage;
  let fixture: ComponentFixture<DaycounterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DaycounterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
