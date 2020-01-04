import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule
} from "@angular/forms";
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: "app-ngxeditor",
  templateUrl: "./ngxeditor.component.html",
  styleUrls: ["./ngxeditor.component.css"]
})
export class NgxeditorComponent implements OnInit {
  title = "ngxeditormaxlenght";
  formdata;
  htmlContent: any;


  constructor(private http: HttpClient) {}
  public progress: number;
  public message: string;
  @Output() public onUploadFinished = new EventEmitter();


  ngOnInit() {
    this.formdata = new FormGroup({
      faq_question: new FormControl("", [
        Validators.required,
        this.noWhitespaceValidator,
        Validators.maxLength(400),
        Validators.minLength(5)
      ])
    });
  }

  public uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }


    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);


    this.http.post('https://localhost:5001/api/upload/1111', formData,  {reportProgress: true, observe: 'events'})
    .subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round(100 * event.loaded / event.total);
      } else if (event.type === HttpEventType.Response) {
        this.message = 'Upload success.';
        this.onUploadFinished.emit(event.body);
      }
    });
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || "").trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  on_submit(formdata) {
    console.log(this.htmlContent);
  }
}
