import { Routes } from '@angular/router';

import { NotFound } from './error-routing/not-found/not-found';
import { UncaughtError } from './error-routing/error/uncaught-error';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImageToImageComponent } from './image-to-image/image-to-image.component';
import { TextToImageComponent } from './text-to-image/text-to-image.component';
import { AITranslationComponent } from './ai-translation/ai-translation.component';
import { AskAIComponent } from './ask-ai/ask-ai.component';
import { MyCreationsComponent } from './my-creations/my-creations.component';
import { SettingsComponent } from './settings/settings.component';
import { AdminOverviewComponent } from './admin-overview/admin-overview.component';
import { ChildViewComponent } from './child-view/child-view.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'error', component: UncaughtError },
  { path: 'dashboard', component: DashboardComponent, data: { text: 'Dashboard' } },
  { path: 'image-to-image', component: ImageToImageComponent, data: { text: 'Image-To-Image' } },
  { path: 'text-to-image', component: TextToImageComponent, data: { text: 'Text-To-Image' } },
  { path: 'ai-translation', component: AITranslationComponent, data: { text: 'Aitranslation' } },
  { path: 'ask-ai', component: AskAIComponent, data: { text: 'Ask-Ai' } },
  { path: 'my-creations', component: MyCreationsComponent, data: { text: 'My-Creations' } },
  { path: 'settings', component: SettingsComponent, data: { text: 'Settings' } },
  { path: 'admin-overview', component: AdminOverviewComponent, data: { text: 'Admin-Overview' } },
  { path: 'child-view', component: ChildViewComponent, data: { text: 'Child-View' } },
  { path: '**', component: NotFound } // must always be last
];
