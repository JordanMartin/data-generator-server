import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectDefinitionComponent } from './object-definition.component';

describe('DefinitionComponent', () => {
  let component: ObjectDefinitionComponent;
  let fixture: ComponentFixture<ObjectDefinitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectDefinitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
