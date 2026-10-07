import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-ai-translation',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxIconButtonDirective, IgxButtonDirective, IgxIconComponent, FormsModule],
  templateUrl: './ai-translation.component.html',
  styleUrls: ['./ai-translation.component.scss']
})
export class AITranslationComponent {
  public value = 'Welcome to the next generation of creative multi-modal artificial intelligence. UOR Social is fast, responsive, and ready for your ideas.';
}
