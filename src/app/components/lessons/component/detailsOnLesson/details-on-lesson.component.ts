import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "details-on-lesson",
  templateUrl: "./details-on-lesson.component.html",
  styles: [
    `
      .pointer {
        cursor: pointer;
        color: gray;
      }
    `,
  ],
})
export class DetailsOnLessonComponent {
  public editFields = { name: false, hour: false, homework: false };
  @ViewChild("nameInput", { static: false }) name;
  @ViewChild("hourInput", { static: false }) hour;
  @ViewChild("homeworkInput", { static: false }) homework;
  @Input() oneLesson: any;
  @Input() lessonIndex: number;
  @Output() delete = new EventEmitter();

  onDeleteLesson() {
    this.delete.emit(this.lessonIndex);
  }

  onEditLesson(field) {
    this.editFields[field] = true;
    setTimeout(() => {
      this[field].nativeElement.focus();
    }, 0);
  }
  onBlur(field) {
    this.editFields[field] = false;
  }
}
