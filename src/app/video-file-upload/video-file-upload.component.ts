import { Component, OnInit, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
      <div class="modal-header">
      <h4 class="modal-title" id="modal-basic-title">Invalid File</h4>
      </div>
      <div class="modal-body">
        <label>This is an invalid file format !!</label>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-dark" (click)="modal.close()">Close</button>
      </div>
  `
})
export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) { }
}
@Component({
  selector: 'app-video-file-upload',
  templateUrl: './video-file-upload.component.html',
  styleUrls: ['./video-file-upload.component.css']
})
export class VideoFileUploadComponent implements OnInit {

  mediaSrc: any;
  @Output() uploaded = new EventEmitter();
  @Output() srcLocation = new EventEmitter();
  show: boolean = true;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  onUpload() {
    document.querySelector('input').click();
  }

  fileUpload(event, errorModal) {
    let sourceLocation: string;
    if (!event.target.files[0].type.includes('video')) {
      const modalRef = this.modalService.open(NgbdModalContent);
      modalRef.componentInstance.name = 'World';
    } else {
      const URL = window.URL || (window as any).webkitURL;
      sourceLocation = URL.createObjectURL(event.target.files[0]);
      this.srcLocation.emit(sourceLocation);
      this.uploaded.emit(true);
    }
  }
}
