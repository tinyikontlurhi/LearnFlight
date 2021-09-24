import { ComponentsModule } from './../component/component.module';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  RouterModule } from '@angular/router';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { QuillModule } from 'ngx-quill';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppsRoutes } from './apps.routing';

import { ChatComponent } from './chat/chat.component';
import { TicketsComponent } from './ticketlist/tickets.component';
import { TicketdetailsComponent } from './ticketdetails/ticketdetails.component';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { FullcalendarComponent } from './fullcalendar/fullcalendar.component';

import { TodosComponent } from './todos/todos.component';
import { NotesComponent } from './notes/notes.component';

// new
import { TasksComponent } from './tasks/tasks.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { MailboxComponent } from './mail/mailbox.component';
import { ListingComponent } from './mail/listing/listing.component';
import { DetailComponent } from './mail/detail/detail.component';
import { ComposeComponent } from './mail/compose/compose.component';

import { ContactComponent } from './contact/contact.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { EditAddUserComponent } from './users/edit-add-user/edit-add-user.component';

import { TicketService } from './ticketlist/tickets.service';
import { TimeAgoPipe } from './ticketlist/date-ago.pipe';
import { ContactService } from './contacts/contact.service';
import { NoteService } from './notes/note.service';
import { TodoService } from './todos/todo.service';
import { UserService } from './users/userService.service';
import { TasksService } from './tasks/tasks-service.service';

// New
import { MailGlobalVariable } from './mail/mail.service';
import { MailService } from './mail/mailService';
import { DevicesComponent } from './devices/devices.component';
import { RulesComponent } from './devices/rules/rules.component';
import { GroupsComponent } from './devices/groups/groups.component';
import { DeviceComponent } from './devices/device/device.component';
import { RuleConditionsComponent } from './devices/rule-conditions/rule-conditions.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        NgbModalModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory
        }),
        QuillModule.forRoot(),
        RouterModule.forChild(AppsRoutes),
        PerfectScrollbarModule,
        Ng2SearchPipeModule,
        DragDropModule,
        ComponentsModule
    ],
    declarations: [
        ChatComponent,
        TicketsComponent,
        TicketdetailsComponent,
        TaskboardComponent,
        TodosComponent,
        ContactComponent,
        ContactsComponent,
        FullcalendarComponent,
        NotesComponent,
        TimeAgoPipe,
        ListUsersComponent,
        EditAddUserComponent,
        TasksComponent,
        ContactListComponent,
        MailboxComponent,
        ListingComponent,
        DetailComponent,
        ComposeComponent,
        DevicesComponent,
        RulesComponent,
        GroupsComponent,
        DeviceComponent,
        RuleConditionsComponent
    ],
    providers: [
        ContactService,
        NoteService,
        TodoService,
        UserService,
        DatePipe,
        TicketService,
        DecimalPipe,
        TasksService,
        MailService, MailGlobalVariable
    ]
})
export class AppsModule { }
