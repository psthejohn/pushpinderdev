import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss'],
})
export class CertificateComponent {
  // --- Certificates data ---
  certificates = [
    { image: '../../../assets/Certificates/JAVA SPRINGBOOT CERTIFIED FULL STACK DEVELOPER NIIT STACKROUTE.jpeg', title: 'CERTIFIED FULL STACK (NIIT STACKROUTE)' },
    { image: '../../../assets/Certificates/scrum_fundamentals.png', title: 'SCRUM FUNDAMENTALS CERTIFIED' },
    { image: '../../../assets/Certificates/gen_ai_fundamentals.png', title: 'GEN AI FUNDAMENTALS' },
    { image: '../../../assets/Certificates/ai_for_all.png', title: 'AI FOR ALL' },
    { image: '../../../assets/Certificates/application_security.png', title: 'APPLICATION SECURITY' },
    // Add more if needed
  ];

  // Pagination for certificates
  certPage = 1;
  certPerPage = 4;

  get paginatedCertificates() {
    const start = (this.certPage - 1) * this.certPerPage;
    return this.certificates.slice(start, start + this.certPerPage);
  }

  nextCertPage() {
    if (this.certPage * this.certPerPage < this.certificates.length) this.certPage++;
  }

  prevCertPage() {
    if (this.certPage > 1) this.certPage--;
  }

  // --- Awards data ---
  awards = [
    { image: '../../../assets/Awards & Recognitions/Pinnacle Award_ Pushpinder Singh_15_02_2023.png', title: 'PINNACLE AWARD 2023' },
    { image: '../../../assets/Awards & Recognitions/Pinnacle Award_Pushpinder Singh_19_07_2024.png', title: 'PINNACLE AWARD 2024' },
    { image: '../../../assets/Awards & Recognitions/CSR_EYE_CAMP_26_02_2024.png', title: 'EYE CAMP 2024' },
    { image: '../../../assets/Awards & Recognitions/Falcon_Award_team_testimonial_26_08_2025.png', title: 'FALCON AWARD 2025' },
    { image: '../../../assets/Awards & Recognitions/Pinnacle_award_Testimonial_Pushpinder_Singh_19_07_2024.png', title: 'PINNACLE AWARD TESTIMONIAL' },
    // Add more if needed
  ];

  // Pagination for awards
  awardPage = 1;
  awardPerPage = 4;

  get paginatedAwards() {
    const start = (this.awardPage - 1) * this.awardPerPage;
    return this.awards.slice(start, start + this.awardPerPage);
  }

  nextAwardPage() {
    if (this.awardPage * this.awardPerPage < this.awards.length) this.awardPage++;
  }

  prevAwardPage() {
    if (this.awardPage > 1) this.awardPage--;
  }

  // --- Modals ---
  showModal = false;
  showAwardModal = false;
  selectedCertificate: any = null;
  selectedAward: any = null;

  openModal(certificate: any) {
    this.selectedCertificate = certificate;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedCertificate = null;
  }

  openAwardModal(award: any) {
    this.selectedAward = award;
    this.showAwardModal = true;
  }

  closeAwardModal() {
    this.showAwardModal = false;
    this.selectedAward = null;
  }

  // Escape key close
  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent) {
    if (this.showModal) this.closeModal();
    if (this.showAwardModal) this.closeAwardModal();
  }
}
