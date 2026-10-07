import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IGX_SELECT_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxIconButtonDirective } from 'igniteui-angular';
import { AITranslationComponent } from './ai-translation.component';

describe('AITranslationComponent', () => {
  let component: AITranslationComponent;
  let fixture: ComponentFixture<AITranslationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AITranslationComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IGX_SELECT_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxIconButtonDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AITranslationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
