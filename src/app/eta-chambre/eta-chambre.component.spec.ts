import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtaChambreComponent } from './eta-chambre.component';

describe('EtaChambreComponent', () => {
  let component: EtaChambreComponent;
  let fixture: ComponentFixture<EtaChambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtaChambreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtaChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
