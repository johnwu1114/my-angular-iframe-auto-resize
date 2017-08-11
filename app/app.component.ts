import { Component } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: "my-app",
    templateUrl: "/app/app.component.html"
})
export class AppComponent {
    frameUrl: SafeResourceUrl;

    constructor(private sanitizer: DomSanitizer) {
        let url = "https://blog.johnwu.cc/";
        this.frameUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}