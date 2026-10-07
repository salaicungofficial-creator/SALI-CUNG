import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_SLIDER_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-image-to-image',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_SLIDER_DIRECTIVES, IgxIconButtonDirective, IgxIconComponent, IgxButtonDirective, FormsModule],
  templateUrl: './image-to-image.component.html',
  styleUrls: ['./image-to-image.component.scss']
})
export class ImageToImageComponent {
  public value = 'Transform this image into a cinematic professional photograph while preserving the person's identity, facial structure, pose and important details. Improve lighting, composition, skin texture, depth, color grading and realism.';
  public value1 = 65;
}
