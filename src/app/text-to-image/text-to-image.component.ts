import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_CARD_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_LINEAR_PROGRESS_BAR_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-text-to-image',
  imports: [IGX_LINEAR_PROGRESS_BAR_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxIconButtonDirective, IgxButtonDirective, IgxIconComponent, FormsModule],
  templateUrl: './text-to-image.component.html',
  styleUrls: ['./text-to-image.component.scss']
})
export class TextToImageComponent {
  public value = 'A futuristic cyberpunk astronaut exploring neon-lit alleyways of Kyoto, shot on 35mm lens, atmospheric depth, cinematic volumetric lighting, volumetric smoke, high dynamic range, hyperrealistic.';
}
