import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { TrendsComponent } from './pages/trends/trends.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { ConfigureAppsComponent } from './pages/configure-apps/configure-apps.component';
import { ProductivityProfileComponent } from './pages/configure-apps/productivity-profile/productivity-profile.component';
import { MappingComponent } from './pages/configure-apps/mapping/mapping.component';
import { ApplicationGroupsComponent } from './pages/configure-apps/application-groups/application-groups.component';
import { TeamsComponent } from './pages/configure-apps/productivity-profile/teams/teams.component';
import { UsersComponent } from './pages/configure-apps/productivity-profile/users/users.component';
import { ApplicationGroupsComponent as ProductivityProfileApplicationsGroup } from './pages/configure-apps/productivity-profile/application-groups/application-groups.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'trends', component: TrendsComponent },
      { path: 'timeline', component: TimelineComponent },
      {
        path: 'configure-apps',
        component: ConfigureAppsComponent,
        children: [
          {
            path: 'productivity-profile',
            component: ProductivityProfileComponent,
            children: [
              {
                path: 'application-groups',
                component: ProductivityProfileApplicationsGroup,
              },
              { path: 'teams', component: TeamsComponent },
              { path: 'users', component: UsersComponent },
              { path: '', redirectTo: 'application-groups', pathMatch: 'full' }, // Default tab
            ],
          },
          { path: 'mapping', component: MappingComponent },
          { path: 'application-groups', component: ApplicationGroupsComponent },
          { path: '', redirectTo: 'productivity-profile', pathMatch: 'full' }, // Default tab
        ],
      },
      { path: '', redirectTo: '/trends', pathMatch: 'full' }, // Default route
    ],
  },
];
