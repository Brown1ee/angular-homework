import { NgModule } from "@angular/core";
import { LessonsComponent } from "./container/lessons.component";
import { LessonsDetailsComponent } from "./component/lessonDetails/lessons-details.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DetailsOnLessonComponent } from "./component/detailsOnLesson/details-on-lesson.component";

@NgModule({
  declarations: [
    LessonsComponent,
    LessonsDetailsComponent,
    DetailsOnLessonComponent,
  ],
  imports: [CommonModule, FormsModule],
  providers: [],
  exports: [LessonsComponent],
})
export class LessonsModule {}
