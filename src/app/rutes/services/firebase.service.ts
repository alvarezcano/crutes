import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  setDoc,
} from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { Rute } from '../../models/rute.interface';

@Injectable({ providedIn: 'root' })
export class FirebaseService {
  firestore = inject(Firestore);
  todosCollection = collection(this.firestore, 'todos');

  getTodos(): Observable<Rute[]> {
    return collectionData(this.todosCollection, {
      idField: 'id',
    }) as Observable<Rute[]>;
  }

  addTodo(text: string): Observable<string> {
    const todoToCreate = { text, isCompleted: false };
    const promise = addDoc(this.todosCollection, todoToCreate).then(
      (response) => response.id
    );
    return from(promise);
  }

  removeTodo(todoId: string): Observable<void> {
    const docRef = doc(this.firestore, 'todos/' + todoId);
    const promise = deleteDoc(docRef);
    return from(promise);
  }

  updateTodo(
    todoId: string,
    dataToUpdate: { text: string; isCompleted: boolean }
  ): Observable<void> {
    const docRef = doc(this.firestore, 'todos/' + todoId);
    const promise = setDoc(docRef, dataToUpdate);
    return from(promise);
  }
}