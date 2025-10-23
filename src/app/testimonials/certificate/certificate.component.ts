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
  awards: any = [
    {
      image: '../../../assets/Awards & Recognitions/Pinnacle Award_ Pushpinder Singh_15_02_2023.png',
      title: 'PINNACLE AWARD 2023',
    },
    {
      image: '../../../assets/Awards & Recognitions/Pinnacle Award_Pushpinder Singh_19_07_2024.png',
      title: 'PINNACLE AWARD 2024',
    },
    {
      image: '../../../assets/Awards & Recognitions/Falcon_Award_team_testimonial_26_08_2025.png',
      title: 'FALCON AWARD TESTIMONIAL',
    },
    {
      image: '../../../assets/Awards & Recognitions/CSR_EYE_CAMP_26_02_2024.png',
      title: 'EYE CAMP 26-FEB, 2024',
    },
    {
      image: '../../../assets/Awards & Recognitions/Pinnacle_award_Testimonial_Pushpinder_Singh_19_07_2024.png',
      title:'PINNACLE AWARD TESTIMONIAL'
    }
  ];

  showAwardModal = false;
  selectedAward: any = null;

  openAwardModal(award: any) {
    this.selectedAward = award;
    this.showAwardModal = true;
  }

  closeAwardModal() {
    this.showAwardModal = false;
    this.selectedAward = null;
  }

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
