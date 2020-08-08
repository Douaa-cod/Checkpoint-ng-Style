import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphMmanagerComponent } from './paragraph-mmanager.component';

describe('ParagraphMmanagerComponent', () => {
  let component: ParagraphMmanagerComponent;
  let fixture: ComponentFixture<ParagraphMmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParagraphMmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParagraphMmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
