import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss'],
})
export class CertificateComponent {
  certificates = [
    {
      image: '../../../assets/Certificates/scrum_fundamentals.png',
      title: 'SCRUM FUNDAMENTALS CERTIFIED',
    },
    {
      image: '../../../assets/Certificates/gen_ai_fundamentals.png',
      title: 'GEN AI FUNDAMENTALS',
    },
    {
      image: '../../../assets/Certificates/ai_for_all.png',
      title: 'AI FOR ALL',
    },
    {
      image: '../../../assets/Certificates/application_security.png',
      title: 'APPLICATION SECURITY',
    },
  ];

  showModal = false;
  selectedCertificate: { image: string; title: string } | null = null;

  openModal(certificate: { image: string; title: string }) {
    this.selectedCertificate = certificate;
    this.showModal = true;
    document.body.style.overflow = 'hidden'; // Prevent scroll
  }

  closeModal() {
    this.showModal = false;
    this.selectedCertificate = null;
    document.body.style.overflow = ''; // Restore scroll
  }

  // ✅ Listen for Escape key press
  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent) {
    if (this.showModal) {
      this.closeModal();
    }
  }
}
