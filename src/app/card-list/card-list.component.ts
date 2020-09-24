import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {CardInterface} from '../shared/intefaces';
import {HttpWorkService} from '../shared/http-work.service';
import {EditCardComponent} from '../edit-card/edit-card.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
    selector: 'app-card-list',
    templateUrl: './card-list.component.html',
    styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit, OnDestroy {

    cards: CardInterface[];
    subGetCards$: Subscription;
    subDeleteCard$: Subscription;

    constructor(public dialog: MatDialog, private httpWorkService: HttpWorkService) {
    }

    openCreateDialog(): void {
        const option = 'Create';
        const title = 'Add new card';
        const dialogRef = this.dialog.open(EditCardComponent, {
            width: '450px',
            data: {option, title}
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.httpWorkService.addCard(result).subscribe(
                    (newCard) => this.cards.unshift(newCard)
                );
            } else {
                return;
            }
        });
    }

    openEditDialog(card: CardInterface): void {
        const option = 'Update';
        const title = 'Update this card';
        const dialogRef = this.dialog.open(EditCardComponent, {
            width: '450px',
            data: {card, option, title}
        });

        dialogRef.afterClosed().subscribe((result: CardInterface) => {
            if (result) {
                this.httpWorkService.updateUser(result).subscribe(
                    () => this.cards = this.cards.map(cardData => cardData.id === result.id ? result : cardData)
                );
            } else {
                return;
            }
        });
    }

    deleteCard(id: number): void {
        this.subDeleteCard$ = this.httpWorkService.deleteCard(id).subscribe(
            () => this.cards = this.cards.filter((el) => el.id !== id)
        );
    }

    ngOnInit(): void {
        this.httpWorkService.getAllCards().subscribe(
            (cards) => this.cards = cards
        );
    }

    ngOnDestroy(): void {
        if (this.subDeleteCard$) {
            this.subDeleteCard$.unsubscribe();
        }
        if (this.subGetCards$) {
            this.subGetCards$.unsubscribe();
        }
    }

}
