import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  skills = [
    { name: 'C# / .NET 8/9', level: 95 },
    { name: 'Clean Architecture', level: 90 },
    { name: 'AI / RAG / LLM', level: 88 },
    { name: 'ASP.NET Core', level: 92 },
    { name: 'Payment Systems', level: 90 },
    { name: 'TypeScript / Angular', level: 85 },
    { name: 'Docker / DevOps', level: 75 },
    { name: 'SQL / Entity Framework', level: 90 }
  ];

  experience = [
    {
      title: 'Solutions Architect & AI Engineer',
      company: 'Self-Employed / Consultant',
      period: 'Jan 2022 - Present',
      description: 'Architected and built production-ready AI systems (WISC AI) and payment gateway library (WISC.Payments) from scratch using Clean Architecture, Multi-Agent Systems, and RAG. Implemented AST-Based Security for Zero SQL Injection guarantee.'
    },
    {
      title: 'Senior Software Engineer',
      company: 'Previous Company',
      period: 'Jan 2020 - Dec 2021',
      description: 'Led development of enterprise ERP system modules, implemented Clean Architecture principles, and mentored junior developers on best practices and design patterns.'
    },
    {
      title: 'Software Engineer',
      company: 'Previous Company',
      period: 'Jun 2018 - Dec 2019',
      description: 'Developed and maintained web applications using .NET technologies, participated in code reviews and architectural discussions, implemented RESTful APIs and database integrations.'
    }
  ];
}
