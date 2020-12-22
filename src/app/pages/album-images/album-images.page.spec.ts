import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlbumImagesPage } from './album-images.page';

describe('AlbumImagesPage', () => {
  let component: AlbumImagesPage;
  let fixture: ComponentFixture<AlbumImagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumImagesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlbumImagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
