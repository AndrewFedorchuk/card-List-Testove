import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CardInterface, UserInterface} from './intefaces';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class HttpWorkService {

    constructor(private http: HttpClient) {
    }

    addUser(user: UserInterface): Observable<UserInterface> {
        return this.http.post<UserInterface>('https://jsonplaceholder.typicode.com/users', user);
    }

    getAllCards(): Observable<CardInterface[]> {
        return this.http.get<CardInterface[]>('https://jsonplaceholder.typicode.com/todos')
            .pipe(
                map(
                    (todos) => {
                        return todos.filter((todo) => todo.id <= 10);
                    }
                )
            );
    }

    addCard(card: CardInterface): Observable<CardInterface> {
        return this.http.post<CardInterface>('https://jsonplaceholder.typicode.com/todos', card);
    }

    updateUser(card: CardInterface): Observable<CardInterface> {
        return this.http.put<CardInterface>(`https://jsonplaceholder.typicode.com/todos/${card.id}`, card);
    }

    deleteCard(id: number): Observable<CardInterface> {
        return this.http.delete<CardInterface>(`https://jsonplaceholder.typicode.com/todos/${id}`);
    }
}
