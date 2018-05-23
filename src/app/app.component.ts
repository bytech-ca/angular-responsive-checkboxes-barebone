import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // Our dummy data - items where selected = true will be selected by default

  user = { skills: [
    { name: 'Angular', selected: false },
    { name: 'React', selected: false },
    { name: 'Vue', selected: false },
    { name: 'jQuery', selected: true },
    { name: 'Ember', selected: false }
  ]};

  checkboxForm;

  constructor(private formBuilder: FormBuilder) {
    this.checkboxForm = this.formBuilder.group({
      skills: this.buildSkills()
    });
  }

  get skills() {
    return this.checkboxForm.get('skills');
  }

  buildSkills() {
    const arr = this.user.skills.map( skill => {
      return this.formBuilder.control(skill.selected);
    });
    return this.formBuilder.array(arr);
  }

  updateSkills(i) {
    this.user.skills[i].selected = !this.user.skills[i].selected;
  }

}
