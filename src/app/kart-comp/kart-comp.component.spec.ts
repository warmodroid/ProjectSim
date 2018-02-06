import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KartCompComponent } from './kart-comp.component';
import { KartServiceService } from '../kart-service.service';

describe('KartCompComponent', () => {
  let component: KartCompComponent;
  let fixture: ComponentFixture<KartCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KartCompComponent ],
      providers: [KartServiceService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KartCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
