import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IGX_SELECT_DIRECTIVES, IGX_LINEAR_PROGRESS_BAR_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxIconButtonDirective } from 'igniteui-angular';
import { TextToImageComponent } from './text-to-image.component';

describe('TextToImageComponent', () => {
  let component: TextToImageComponent;
  let fixture: ComponentFixture<TextToImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextToImageComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IGX_SELECT_DIRECTIVES, IGX_LINEAR_PROGRESS_BAR_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxIconButtonDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextToImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
