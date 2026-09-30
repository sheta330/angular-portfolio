import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects = [
    {
      title: 'WISC AI - Enterprise AI System',
      description: 'Production-ready AI system using Clean Architecture and Multi-Agent Orchestration. Implemented RAG with Zero-Database Architecture for SQL generation and AST-Based Security Layer ensuring Zero SQL Injection guarantee.',
      image: 'placeholder',
      technologies: ['.NET 8', 'C#', 'Ollama', 'RAG', 'Multi-Agent Systems', 'AST Parsing'],
      link: '#',
      github: '#'
    },
    {
      title: 'WISC.Payments - Enterprise Payment Gateway',
      description: 'Clean, extensible payment gateway library supporting 9+ payment providers (Stripe, Moyasar, STC Pay, Fawry, InstaPay, Noon Payments, Tabby, Tamara, PayPal). Published as NuGet package.',
      image: 'placeholder',
      technologies: ['.NET 8', 'C#', 'ASP.NET Core', 'Polly', 'MediatR', 'FluentValidation'],
      link: '#',
      github: '#'
    },
    {
      title: 'Payment Integration Template',
      description: 'End-to-end payment integration template with frontend and backend. Implemented webhook processing with signature verification and mock data sources for testing.',
      image: 'placeholder',
      technologies: ['.NET 8', 'Angular', 'TypeScript', 'Stripe API'],
      link: '#',
      github: '#'
    },
    {
      title: 'Enterprise ERP System',
      description: 'Led development of enterprise ERP system modules using Clean Architecture principles with focus on scalability and maintainability.',
      image: 'placeholder',
      technologies: ['.NET', 'C#', 'Entity Framework', 'SQL Server'],
      link: '#',
      github: '#'
    },
    {
      title: 'Multi-Tenant AI Platform',
      description: 'Designed scalable multi-tenant AI systems with isolated schema caching and military-grade security patterns for enterprise clients.',
      image: 'placeholder',
      technologies: ['.NET 8', 'C#', 'Docker', 'Azure'],
      link: '#',
      github: '#'
    },
    {
      title: 'Event-Driven Microservices',
      description: 'Implemented Event-Driven Architecture with Outbox Pattern for guaranteed event delivery and resilience patterns using Polly.',
      image: 'placeholder',
      technologies: ['.NET 8', 'C#', 'RabbitMQ', 'Polly', 'MediatR'],
      link: '#',
      github: '#'
    }
  ];

  filterProjects(category: string) {
    // Implement filtering logic
    console.log('Filtering by:', category);
  }
}
