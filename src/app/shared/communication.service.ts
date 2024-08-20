import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  private messageSource = new BehaviorSubject<string>('No mesage');
  currentMessage = this.messageSource.asObservable();

  private extra1MessageSource = new BehaviorSubject<string>('No mesage');
  private extra2MessageSource = new BehaviorSubject<string>('No mesage');
  private feature2MessageSource = new BehaviorSubject<string>('No mesage');

  currentExtra1Message = this.extra1MessageSource.asObservable();
  currentExtra2Message = this.extra2MessageSource.asObservable();
  currentFeature2Message = this.feature2MessageSource.asObservable();

  constructor() {}

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  changeExtra1Message(message: string) {
    this.extra1MessageSource.next(message);
  }

  changeExtra2Message(message: string) {
    this.extra2MessageSource.next(message);
  }

  changeFeature2Message(message: string) {
    this.feature2MessageSource.next(message);
  }
}
