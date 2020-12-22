import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalPostCommentPage } from './modal-post-comment.page';

describe('ModalPostCommentPage', () => {
  let component: ModalPostCommentPage;
  let fixture: ComponentFixture<ModalPostCommentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPostCommentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalPostCommentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
