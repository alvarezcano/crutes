import { Component, inject } from '@angular/core';
import { Database, ref, set } from '@angular/fire/database';
import { Firestore, collection, collectionData, getDocs, getFirestore, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FirebaseService } from './rutes/services/firebase.service';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  imagePath: string = 'assets/images/bus.png';

  title = 'crutes';
  firestore = inject(Firestore);

  //todosService = inject(TodosService);
  // firebaseService = inject(FirebaseService);
  // ngOnInit(): void {
  //   this.firebaseService.getTodos().subscribe((item) => {
  //     //this.todosService.todosSig.set(todos);
  //     console.log(item)
  //   });
  // }

  constructor() {
    
    const db = this.firestore;

    // Obtener una referencia a la colección 'users'
    const usersRef = collection(db, 'rutes');

    // Si quieres hacer una consulta (por ejemplo, usuarios activos)
    const q = query(usersRef);

    // Realizar la consulta y obtener los documentos
    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
      });
    }).catch((error) => {
      console.error("Error getting documents: ", error);
    });
  }
}
