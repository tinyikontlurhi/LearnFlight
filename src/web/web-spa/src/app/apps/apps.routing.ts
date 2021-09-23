import { Routes } from '@angular/router';

import { ChatComponent } from './chat/chat.component';
import { TicketsComponent } from './ticketlist/tickets.component';
import { TicketdetailsComponent } from './ticketdetails/ticketdetails.component';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { FullcalendarComponent } from './fullcalendar/fullcalendar.component';
import { TodosComponent } from './todos/todos.component';
import { NotesComponent } from './notes/notes.component';
import { ContactComponent } from './contact/contact.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TasksComponent } from './tasks/tasks.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { MailboxComponent } from './mail/mailbox.component';
import { DetailComponent } from './mail/detail/detail.component';
import { ComposeComponent } from './mail/compose/compose.component';

import { ListUsersComponent } from './users/list-users/list-users.component';
import { DevicesComponent } from './devices/devices.component';
import { GroupsComponent } from './devices/groups/groups.component';
import { RulesComponent } from './devices/rules/rules.component';
import { RuleConditionsComponent } from './devices/rule-conditions/rule-conditions.component';
export const AppsRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'chat',
                component: ChatComponent,
                data: {
                    title: '',
                    urls: [

                    ]
                }
            },

            {
                path: 'mail/:type',
                component: MailboxComponent,
                children: [

                    { path: ':id', component: DetailComponent },
                    { path: '/compose', component: ComposeComponent }
                ],
                data: {
                    title: '',
                    urls: [

                    ]
                }
            },

            {
                path: 'ticketlist',
                component: TicketsComponent,
                data: {
                    title: 'Ticket List',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Ticket List' }
                    ]
                }
            },
            {
                path: 'devices',
                component: DevicesComponent,
                data: {
                    title: 'Device List',
                    urls: [
                        {title: 'Dashboard', url: 'dashboard/portal'},
                        {title: 'Device List'}
                    ]
                }
            },
            
            {
                path: 'device-groups',
                component: GroupsComponent,
                data: {
                    title: 'Device Groups',
                    urls: [
                        {title: 'Dashboard', url: 'dashboard/portal'},
                        {title: 'Device Groups'}
                    ]
                }
            },
            {
                path: 'device-rules',
                component: RulesComponent,
                data: {
                    title: 'Rules',
                    urls: [
                        {title: 'Dashboard', url: 'dashboard/portal'},
                        {title: 'Rules'}
                    ]
                }
            },
            {
                path: 'rule-conditions',
                component: RuleConditionsComponent,
                data: {
                    title: 'Create new rule',
                    urls: [
                        {title: 'Rules', url: 'apps/rules'},
                        {title: 'Create new rule'}
                    ]
                }
            },
            {
                path: 'ticketdetails',
                component: TicketdetailsComponent,
                data: {
                    title: 'Ticket Details',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Ticket Details' }
                    ]
                }
            },
            {
                path: 'taskboard',
                component: TaskboardComponent,
                data: {
                    title: 'Taskboard',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Taskboard' }
                    ]
                }
            },
            {
                path: 'fullcalendar',
                component: FullcalendarComponent,
                data: {
                    title: 'Full-Calendar',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Full-Calendar' }
                    ]
                }
            },
            {
                path: 'todo',
                component: TodosComponent,
                data: {
                    title: '',
                    urls: [

                    ]
                }
            },
            {
                path: 'tasks',
                component: TasksComponent,
                data: {
                    title: '',
                    urls: [

                    ]
                }
            },
            {
                path: 'contact-list',
                component: ContactListComponent,
                data: {
                    title: '',
                    urls: [

                    ]
                }
            },
            {
                path: 'notes',
                component: NotesComponent,
                data: {
                    title: '',
                    urls: [

                    ]
                }
            },
            {
                path: 'users',
                component: ListUsersComponent,
                data: {
                    title: 'Users App',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Users App' }
                    ]
                }
            },
            {
                path: 'contact-grid',
                component: ContactComponent,
                data: {
                    title: 'Contact Grid',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Contact Grid' }
                    ]
                }
            },
            {
                path: 'contact',
                component: ContactsComponent,
                data: {
                    title: '',
                    urls: [

                    ]
                }
            }
        ]
    }
];
