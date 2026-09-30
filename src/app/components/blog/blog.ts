import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [CommonModule],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class Blog {
  articles = [
    {
      title: 'Building Zero SQL Injection AI Systems with AST-Based Security',
      excerpt: 'How I implemented AST-Based Security Layer in WISC AI to guarantee Zero SQL Injection in AI-generated SQL queries using military-grade security patterns.',
      date: 'September 20, 2024',
      readTime: '12 min read',
      category: 'AI Security',
      image: 'placeholder'
    },
    {
      title: 'Multi-Agent Systems Architecture for Enterprise AI',
      excerpt: 'Deep dive into building production-ready Multi-Agent Systems with IntentClassifier, CommandGenerator, and RAG Orchestrator using Clean Architecture principles.',
      date: 'September 15, 2024',
      readTime: '15 min read',
      category: 'AI Architecture',
      image: 'placeholder'
    },
    {
      title: 'RAG Implementation with Zero-Database Architecture',
      excerpt: 'Implementing Retrieval-Augmented Generation without traditional database dependencies using FrozenDictionary for O(1) lookups and military-grade caching.',
      date: 'September 10, 2024',
      readTime: '10 min read',
      category: 'AI Architecture',
      image: 'placeholder'
    },
    {
      title: 'Clean Architecture in .NET 8: A Practical Guide',
      excerpt: 'Implementing Clean Architecture principles in real-world enterprise applications with dependency injection, domain-driven design, and SOLID principles.',
      date: 'September 5, 2024',
      readTime: '8 min read',
      category: 'Architecture',
      image: 'placeholder'
    },
    {
      title: 'Building Enterprise Payment Gateway Libraries',
      excerpt: 'Design patterns and architecture decisions behind WISC.Payments library supporting 9+ payment providers with Strategy Pattern and Event-Driven Architecture.',
      date: 'August 28, 2024',
      readTime: '11 min read',
      category: 'Payment Systems',
      image: 'placeholder'
    },
    {
      title: 'Resilience Patterns with Polly in .NET',
      excerpt: 'Implementing Circuit Breaker, Exponential Backoff Retry, and Timeout patterns using Polly library for building resilient microservices.',
      date: 'August 20, 2024',
      readTime: '9 min read',
      category: 'Architecture',
      image: 'placeholder'
    }
  ];

  selectedCategory = 'All';

  categories = ['All', 'AI Security', 'AI Architecture', 'Architecture', 'Payment Systems'];

  filterByCategory(category: string) {
    this.selectedCategory = category;
  }

  get filteredArticles() {
    if (this.selectedCategory === 'All') {
      return this.articles;
    }
    return this.articles.filter(article => article.category === this.selectedCategory);
  }
}
