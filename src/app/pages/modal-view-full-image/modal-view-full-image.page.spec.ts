import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalViewFullImagePage } from './modal-view-full-image.page';

describe('ModalViewFullImagePage', () => {
  let component: ModalViewFullImagePage;
  let fixture: ComponentFixture<ModalViewFullImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalViewFullImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalViewFullImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
