import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { TestCompComponent } from './test-comp/test-comp.component';
import { LoginComponent } from './login/login.component';
import {MessagesModule} from 'primeng/messages';
import {ConfirmationService} from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { FormTableComponent } from './form-table/form-table.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CheckboxModule} from 'primeng/checkbox';
import {DialogModule} from 'primeng/dialog';
import { ModalExampleComponent } from './form-table/modal-example/modal-example.component';
import {ModalFooterComponent} from './form-table/modal/modal-footer/modal-footer.component';
import {ModalHeaderComponent} from './form-table/modal/modal-header/modal-header.component';
import {ModalComponent} from './form-table/modal/modal.component';
import {BsModalService, ComponentLoaderFactory, ModalBackdropComponent, PositioningService} from 'ngx-bootstrap';
import {ModalContainerComponent} from 'ngx-bootstrap/modal';
import { TestCompTwoComponent } from './test-comp-two/test-comp-two.component';
import { TestCompThreeComponent } from './test-comp-three/test-comp-three.component';
import { TestCompFourComponent } from './test-comp-four/test-comp-four.component';


@NgModule({
  declarations: [
    AppComponent,
    TestCompComponent,
    LoginComponent,
    FormTableComponent,
    ModalExampleComponent,
    ModalFooterComponent,
    ModalHeaderComponent,
    ModalComponent,
    ModalBackdropComponent,
    ModalContainerComponent,
    TestCompTwoComponent,
    TestCompThreeComponent,
    TestCompFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MessagesModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    CheckboxModule,
    DialogModule
  ],
  entryComponents: [ModalBackdropComponent, ModalContainerComponent, ModalExampleComponent],
  providers: [ConfirmationService, BsModalService, ComponentLoaderFactory, PositioningService],
  bootstrap: [AppComponent]
})
export class AppModule { }
