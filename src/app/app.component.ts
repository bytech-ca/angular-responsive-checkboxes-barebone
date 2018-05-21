import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // Our dummy data - items where selected is true will be selected by default

  user = { skills: [
    { name: 'Angular', selected: false },
    { name: 'React', selected: false },
    { name: 'Vue', selected: false },
    { name: 'jQuery', selected: false },
    { name: 'Ember', selected: false }
  ]};

  userSelected = [];    // Array of checkbox items currently selected
  spliceValue: number;  // Used when unchecking an item - array position of item to remove

  checkboxForm;
  lc;                   // Loop counter used in updateSkill()

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

    if (this.checkboxForm.value.skills[i]) {

      // Add to selected values
      this.userSelected.push(this.user.skills[i].name);

    } else {

      // Reiterate over skills to see which position item one to remove
      for (this.lc = 0; this.lc < this.userSelected.length; this.lc++) {

        if (this.userSelected[this.lc] === this.user.skills[i].name) {
          this.spliceValue = this.lc;
        }

      }

      this.userSelected.splice(this.spliceValue, 1);

    }

  }

}
