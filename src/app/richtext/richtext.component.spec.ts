import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RichtextComponent } from './richtext.component';


describe('RichtextComponent', () => {
  let component: RichtextComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RichtextComponent
      ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));
});


