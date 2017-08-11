import { Component, Input, ViewChild, ElementRef, HostListener } from "@angular/core";

@Component({
    selector: "my-iframe",
    templateUrl: "/app/my-iframe.component.html",
    styles: ["iframe { margin-bottom: -4px; }"]
})
export class MyIFrameComponent {
    @Input() src: string;
    @ViewChild("frame") frameElement: ElementRef;
    containerMinWidth: number = 0;
    containerMinHeight: number = 0;
    containerWidth: number = this.containerMinWidth;
    containerHeight: number = this.containerMinHeight;

    ngOnInit() {
        this.onResize(window.innerWidth, window.innerHeight);
    }

    @HostListener("window:resize", ["$event.target.innerWidth", "$event.target.innerHeight"])
    onResize(width: number, height: number): void {
        let top = this.frameElement.nativeElement.offsetTop;
        let left = this.frameElement.nativeElement.offsetLeft;

        this.containerWidth = Math.max(width - left, this.containerMinWidth);
        this.containerHeight = Math.max(height - top, this.containerMinHeight);
    }
}