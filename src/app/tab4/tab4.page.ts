import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
})
export class Tab4Page {
  feedbackForm: FormGroup;
  formSubmitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.feedbackForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      rating: ['', Validators.required],
      feedback: ['', Validators.required],
    });
  }
  submitForm() {
    // Here you can add your own code to send the form data to your server using HTTP POST request or any other means.

    this.feedbackForm.reset();
    this.formSubmitted = true;
  }
}
