import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_CHIPS_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-ask-ai',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxIconButtonDirective, IgxButtonDirective, IgxIconComponent, IgxAvatarComponent, FormsModule],
  templateUrl: './ask-ai.component.html',
  styleUrls: ['./ask-ai.component.scss']
})
export class AskAIComponent {
  public activeChatsSelectedItem?: string;
  public value?: string;
}
