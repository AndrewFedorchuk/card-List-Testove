import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CardInterface} from '../../shared/intefaces';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    @Input() card: CardInterface;
    @Output() editCard = new EventEmitter<CardInterface>();
    @Output() deleteCard = new EventEmitter<number>();

    constructor() {
    }

    edit(): void {
        this.editCard.emit(this.card);
    }

    ngOnInit(): void {
    }

    delete(): void {
        this.deleteCard.emit(this.card.id);
    }
}
