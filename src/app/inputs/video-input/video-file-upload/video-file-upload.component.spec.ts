import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoFileUploadComponent } from './video-file-upload.component';

describe('VideoFileUploadComponent', () => {
  let component: VideoFileUploadComponent;
  let fixture: ComponentFixture<VideoFileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoFileUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
