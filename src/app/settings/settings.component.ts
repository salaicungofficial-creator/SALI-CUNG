import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_ACCORDION_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxBadgeComponent, IgxButtonDirective } from 'igniteui-angular';

@Component({
  selector: 'app-settings',
  imports: [IGX_EXPANSION_PANEL_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_ACCORDION_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxBadgeComponent, FormsModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  public value = 'user@uorsocial.ai';
  public value1 = 'uor_creator_pro';
}
