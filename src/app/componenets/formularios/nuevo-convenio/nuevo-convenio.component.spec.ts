import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoConvenioComponent } from './nuevo-convenio.component';

describe('NuevoConvenioComponent', () => {
  let component: NuevoConvenioComponent;
  let fixture: ComponentFixture<NuevoConvenioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoConvenioComponent]
    });
    fixture = TestBed.createComponent(NuevoConvenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
