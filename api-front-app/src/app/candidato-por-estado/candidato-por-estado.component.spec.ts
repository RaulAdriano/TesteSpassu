import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatoPorEstadoComponent } from './candidato-por-estado.component';

describe('CandidatoPorEstadoComponent', () => {
  let component: CandidatoPorEstadoComponent;
  let fixture: ComponentFixture<CandidatoPorEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatoPorEstadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatoPorEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
