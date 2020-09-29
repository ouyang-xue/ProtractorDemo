import {FormPage} from './form.po';
import {browser} from 'protractor';
import {ModalComponent} from '../../../src/app/form-table/modal/modal.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ModalHeaderComponent} from '../../../src/app/form-table/modal/modal-header/modal-header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ModalFooterComponent} from '../../../src/app/form-table/modal/modal-footer/modal-footer.component';
import {AppRoutingModule} from '../../../src/app/app-routing.module';
import {AppComponent} from '../../../src/app/app.component';
import {TestCompComponent} from '../../../src/app/test-comp/test-comp.component';
import {LoginComponent} from '../../../src/app/login/login.component';
import {FormTableComponent} from '../../../src/app/form-table/form-table.component';
import {ModalExampleComponent} from '../../../src/app/form-table/modal-example/modal-example.component';
import {BsModalService, ComponentLoaderFactory, ModalBackdropComponent, PositioningService} from 'ngx-bootstrap';
import {ModalContainerComponent} from 'ngx-bootstrap/modal';
import {BrowserModule} from '@angular/platform-browser';
import {MessagesModule} from 'primeng/messages';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CheckboxModule} from 'primeng/checkbox';
import {DialogModule} from 'primeng/dialog';
import {ConfirmationService} from 'primeng/api';

describe('Form Page:', () => {

  // let formPage: FormPage;
  // let component: ModalComponent;
  // let fixture: ComponentFixture<ModalComponent>;
  //
  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [
  //       FormTableComponent,
  //       ModalExampleComponent,
  //       ModalFooterComponent,
  //       ModalHeaderComponent,
  //       ModalComponent,
  //       ModalBackdropComponent,
  //       ModalContainerComponent
  //     ],
  //     imports: [
  //       BrowserModule,
  //       AppRoutingModule,
  //       FormsModule,
  //     ],
  //     providers: [ConfirmationService, BsModalService, ComponentLoaderFactory, PositioningService],
  //   }).compileComponents();
  //
  // }));
  //
  // beforeEach(() => {
  //   fixture = TestBed.createComponent(ModalComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // beforeEach(() => {
  //   browser.sleep(1000);
  //   formPage = new FormPage();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('Open Dialog', () => {
  //   //     formPage.openDialog();
  //   // });

  // it('Input Values in Form', () => {
  //     formPage.inputValues();
  // });
  //
  // it('Apply', () => {
  //     formPage.apply();
  // });
  //
  // it('Cancel', () => {
  //     formPage.openDialog();
  //     formPage.cancel();
  // });

});
