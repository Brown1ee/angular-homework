import { Component, OnInit } from "@angular/core";
import { Lesson } from "../../../models/lesson.model";

@Component({
  selector: "app-lessons",
  templateUrl: "./lessons.component.html",
  styleUrls: ["./lessons.component.scss"],
})
export class LessonsComponent implements OnInit {
  lessons: Lesson[];
  totalHours: number;
  oneLesson: any;
  lessonIndex: number;

  constructor() {
    this.lessons = [
      { name: "Mathematics", hour: 4, homework: "to do ex.4, 5, 7 at p.34" },
      { name: "English", hour: 10, homework: "to learn new words from p.56" },
      {
        name: "Informatics",
        hour: 1,
        homework: "to make a program in Pascal at p.23",
      },
      {
        name: "Geography",
        hour: 2,
        homework: "to learn countries from Europe",
      },
    ];
  }

  ngOnInit(): void {
    this.calculateTotalHours();
  }

  onAdd(lesson: Lesson) {
    if (lesson.name && lesson.hour && lesson.homework)
      this.lessons = this.lessons.concat(lesson);
    this.calculateTotalHours();
  }

  calculateTotalHours() {
    this.totalHours = this.lessons
      .map((el) => {
        return el.hour;
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
  }
  handleLessonClicked(index: number) {
    this.oneLesson = this.lessons[index];
    this.lessonIndex = index;
  }
  onDelete(index: number) {
    (index || index === 0) && this.lessons.splice(index, 1);
    this.oneLesson = "";
    this.calculateTotalHours();
  }
}
