import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  arrowAnimation: boolean = false;
  name: any;
  email!: any;
  message!: any;

  sendingMessage = false;
  successfullySubmitted = false;

  async onSubmit() {
    this.sendingMessage = true;

    await this.sendMail();

    setTimeout(() => {
      this.sendingMessage = false;
      this.successfullySubmitted = true;
    }, 1000);

    setTimeout(() => {
      this.successfullySubmitted = false;
    }, 2500);
  }


  async sendMail() {
    let fd = new FormData();
    fd.append('name', this.name);
    fd.append('message', this.message + ' Nachricht versenden von: ' + this.email);

    await fetch('https://pierre-lettner.de/Portfolio/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
    );
  }
}
