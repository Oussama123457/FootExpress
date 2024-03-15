import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatcheAleatoireComponent } from './matche-aleatoire.component';

describe('MatcheAleatoireComponent', () => {
  let component: MatcheAleatoireComponent;
  let fixture: ComponentFixture<MatcheAleatoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatcheAleatoireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatcheAleatoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
