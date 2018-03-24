import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { ToolsFilterPipe } from './tools-filter.pipe';
import { StrategyFilterPipe } from './strategy-filter.pipe';
import {HttpClientModule} from '@angular/common/http';
import {HomelistService} from "../services/homelist.service";


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        ToolsFilterPipe,
        StrategyFilterPipe
      ],
      imports: [
        FormsModule,
        HttpClientModule
      ],
      providers:[HomelistService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('toolsObject test', () => {
    expect(component.toolsObject).toEqual([]);
  });
});


