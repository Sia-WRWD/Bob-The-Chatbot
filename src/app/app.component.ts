import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  BotPrompts = [
    "Hello, I am Bob!", 
    "Sure.", "Whoa, Chill Out!", 
    "Calm down, I know what I'm doing!",
    "Fine. Be that way!",
    "Whatever."
  ];

  questionIdentifier = ["how", "what", "where", "when", "why"];
  textToDisplay!: string;
  userPrompt!: string;

  ngOnInit(): void {
    this.textToDisplay = this.BotPrompts[0];
  }

  getResponse() {
    return this.userPrompt;
  }

  checkQuestion(response: string) {
    var i = 0;

    for (i = 0; i < this.questionIdentifier.length; i++) {
      if (response.toLowerCase().includes(this.questionIdentifier[i].toLowerCase())) {
        return true;
      }
    }

    return false;
  }

  checkUppercase(response: string) {
    var ucResp = response.toUpperCase();

    if (ucResp == response) {
      return true;
    }

    return false;
  }

  changeResponse() {
    var prompt = this.getResponse();

    if (prompt == null || prompt == " " || prompt == undefined) {
      this.textToDisplay = this.BotPrompts[4];
    } else if (this.checkQuestion(prompt) == true && this.checkUppercase(prompt) == true) {
      this.textToDisplay = this.BotPrompts[2];
      setTimeout(() => {
        this.textToDisplay = this.BotPrompts[3];
      }, 3000);
    } else if (this.checkQuestion(prompt) == true) {
      this.textToDisplay = this.BotPrompts[1];
    } else if (this.checkUppercase(prompt) == true) {
      this.textToDisplay = this.BotPrompts[2];
      setTimeout(() => {
        this.textToDisplay = this.BotPrompts[3];
      }, 3000);
    } else {
      this.textToDisplay = this.BotPrompts[5];
    }

    this.userPrompt = " ";
  }

}
