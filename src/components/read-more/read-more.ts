import { Component, Input, ElementRef, OnChanges} from '@angular/core';

@Component({
    selector: 'read-more',
    templateUrl: 'read-more.html'
})

export class ReadMoreCompoment implements OnChanges {
    @Input() text: string;
    @Input() maxLength: number = 90;
    currentText: string;
    hideToggle: boolean = true;

    public isCollapsed: boolean = true;

    constructor(private elementRef: ElementRef) {
      console.log(this.elementRef);
    }
    toggleView() {
        this.isCollapsed = !this.isCollapsed;
        this.determineView();
    }
    determineView() {
        console.log(this.text.length);
        if (this.text.length <= this.maxLength) {
            this.currentText = this.text;
            this.isCollapsed = false;
            this.hideToggle = true;
            return;
        }
        this.hideToggle = false;
        if (this.isCollapsed == true) {
            this.currentText = this.text.substring(0, this.maxLength) + "...";
        } else if(this.isCollapsed == false)  {
            this.currentText = this.text;
        }

    }
    ngOnChanges() {
        this.determineView();
    }
}
