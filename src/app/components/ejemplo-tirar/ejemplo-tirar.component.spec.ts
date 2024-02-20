import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploTirarComponent } from './ejemplo-tirar.component';

describe('EjemploTirarComponent', () => {
  let component: EjemploTirarComponent;
  let fixture: ComponentFixture<EjemploTirarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjemploTirarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EjemploTirarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
