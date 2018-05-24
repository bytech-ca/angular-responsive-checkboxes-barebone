import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // Our dummy data - items where selected = true will be pre-selected

  user = { skills: [
    { name: 'Angular', selected: false },
    { name: 'React', selected: false },
    { name: 'Vue', selected: false },
    { name: 'jQuery', selected: false },
    { name: 'Ember', selected: false }
  ]};

  checkboxForm;

  constructor(private formBuilder: FormBuilder) {
    this.checkboxForm = this.formBuilder.group({
      skills: this.buildFormControlsForSkills()
    });
  }

  get skills() {
    return this.checkboxForm.get('skills');
  }

  buildFormControlsForSkills() {

    // .map high-function iterates the skills object, creating a form control for each

    // ECMA6's fat arrow function has an implicit return statement when used on single line
    // The easier to understand, full syntax version can be found at https://tinyurl.com/ya3oydpn

    // Brackets in (skill) are optional. I use them to remember that this is an anonymous function

    // For a great explanation of the power of .map higher function and the fat arrow
    // function, see https://tinyurl.com/znh2tem.

    const arr = this.user.skills.map((skill) => this.formBuilder.control(skill.selected));
    return this.formBuilder.array(arr);

  }

  toggleSkill(i) {

    // .selected object is of type boolean, and as such can be toggled simply
    // by setting it to what it's not

    this.user.skills[i].selected = !this.user.skills[i].selected;

  }

}
