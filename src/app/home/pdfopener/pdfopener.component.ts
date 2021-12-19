import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-pdfopener',
  templateUrl: './pdfopener.component.html',
  styleUrls: ['./pdfopener.component.scss']
})
export class PdfopenerComponent implements OnInit {

  url: string = "https://pdfgeneratorapi.com/example-documents/99269/pdf";
  urlSafe: SafeResourceUrl='';
  height=''

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
