import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdidComponent } from './edid.component';

describe('EdidComponent', () => {
  let component: EdidComponent;
  let fixture: ComponentFixture<EdidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
