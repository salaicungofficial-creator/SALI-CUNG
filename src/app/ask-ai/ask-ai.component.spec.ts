import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IgxButtonDirective, IgxIconComponent, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IGX_CHIPS_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxIconButtonDirective } from 'igniteui-angular';
import { AskAIComponent } from './ask-ai.component';

describe('AskAIComponent', () => {
  let component: AskAIComponent;
  let fixture: ComponentFixture<AskAIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AskAIComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IgxButtonDirective, IgxIconComponent, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IGX_CHIPS_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxIconButtonDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AskAIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
