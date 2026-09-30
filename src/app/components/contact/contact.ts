import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitSuccess = false;
  submitError = '';

  socialLinks = [
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/khaled-sheta-3a5b201b0/?isSelfProfile=true', icon: 'in' },
    { platform: 'GitHub', url: 'https://github.com/sheta330?tab=repositories', icon: 'github' },
    { platform: 'Email', url: 'mailto:k.sheta33@gmail.com', icon: 'mail' }
  ];

  onSubmit() {
    if (!this.validateForm()) {
      return;
    }

    this.isSubmitting = true;
    this.submitError = '';
    this.submitSuccess = false;

    // Simulate form submission
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitSuccess = true;
      this.contactForm = { name: '', email: '', subject: '', message: '' };
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        this.submitSuccess = false;
      }, 5000);
    }, 1500);
  }

  validateForm(): boolean {
    if (!this.contactForm.name || !this.contactForm.email || 
        !this.contactForm.subject || !this.contactForm.message) {
      this.submitError = 'Please fill in all fields';
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.contactForm.email)) {
      this.submitError = 'Please enter a valid email address';
      return false;
    }

    return true;
  }
}
