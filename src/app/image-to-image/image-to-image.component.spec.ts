import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IgxIconComponent, IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_SLIDER_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective } from 'igniteui-angular';
import { ImageToImageComponent } from './image-to-image.component';

describe('ImageToImageComponent', () => {
  let component: ImageToImageComponent;
  let fixture: ComponentFixture<ImageToImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageToImageComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IgxIconComponent, IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_SLIDER_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageToImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
