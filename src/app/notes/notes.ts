import { Component, OnInit} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'notes',
  templateUrl: './notes.html',
  styleUrls: ['./notes.css']
})
export class notesComponent implements OnInit {
    notes: string[] = [];

    constructor(
        private cookieservice: CookieService
    ){}

    ngOnInit(): void {
        if(this.cookieservice.check("notes")){
            this.loadFromCookies();
        }
    }

    addNote(note: string): void {
        this.notes.push(note);
        this.saveToCookies();
    }

    removeNote(index: number): void {
        this.notes.splice(index);
        this.saveToCookies();
    }

    saveToCookies(): void {
        this.cookieservice.set("notes", JSON.stringify(this.notes));
    }

    loadFromCookies(): void {
        this.notes = JSON.parse(this.cookieservice.get("notes"));
    }
}
