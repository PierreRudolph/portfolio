import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  arrowAnimation: boolean = false;
  name!: string;
  email!: string;
  message!: string;

  @ViewChild('myForm')
  myForm!: ElementRef;

  @ViewChild('nameInput')
  nameInput!: ElementRef;

  @ViewChild('emailInput')
  emailInput!: ElementRef;

  @ViewChild('messageInput')
  messageInput!: ElementRef;

  @ViewChild('sendButton')
  sendButton!: ElementRef;


  async sendMail() {
    console.log('sending mail', this.myForm);
    let nameInput = this.nameInput.nativeElement;
    let emailInput = this.emailInput.nativeElement;
    let messageInput = this.messageInput.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    nameInput.disabled = true;
    emailInput.disabled = true;
    messageInput.disabled = true;
    sendButton.disabled = true;

    let fd = new FormData();
    fd.append('name', nameInput.value);
    fd.append('message', messageInput.value);

    await fetch('https://pierre-lettner.de/Portfolio/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
    );

    emailInput.disabled = false;
    messageInput.disabled = false;
    sendButton.disabled = false;
  }
}
