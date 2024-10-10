import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface myDocument {
  name: string;
  date: string;
  step: string;
}

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private documentsSubject = new BehaviorSubject<myDocument[]>([]);
  private currentPage = new BehaviorSubject<number>(1);
  private itemsPerPage = 5;

  constructor() { }

  loadDocuments(): void {
    const documents: myDocument[] = [
      { name: 'Documento 1', date: '2024-10-09', step:'1' },
      { name: 'Documento 2', date: '2024-10-08', step:'2' },
    ];
    this.documentsSubject.next(documents);
  }

  getPaginatedDocuments(page: number): Observable<myDocument[]> {
    const startIndex = (page - 1) * this.itemsPerPage;
    const paginatedDocs = this.documentsSubject.value.slice(startIndex, startIndex + this.itemsPerPage);
    return new Observable(observer => {
      observer.next(paginatedDocs);
      observer.complete();
    });
  }

  changePage(page: number): void {
    this.currentPage.next(page);
  }

  getDocuments(): Observable<myDocument[]> {
    return this.documentsSubject.asObservable();
  }

  getCurrentPage(): Observable<number> {
    return this.currentPage.asObservable();
  }
}
