import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalChambreComponent } from './journal-chambre.component';

describe('JournalChambreComponent', () => {
  let component: JournalChambreComponent;
  let fixture: ComponentFixture<JournalChambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournalChambreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JournalChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
