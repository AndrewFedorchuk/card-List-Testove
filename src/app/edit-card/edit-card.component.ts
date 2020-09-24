import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CardInterface, DialogOptionsType} from '../shared/intefaces';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
    selector: 'app-edit-card',
    templateUrl: './edit-card.component.html',
    styleUrls: ['./edit-card.component.scss']
})
export class EditCardComponent implements OnInit {

    form: FormGroup;

    constructor(
        public dialogRef: MatDialogRef<EditCardComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { card: CardInterface, option: DialogOptionsType, title: string }
    ) {
    }


    ngOnInit(): void {
        this.form = new FormGroup({
            title: new FormControl(this.data?.card?.title, [Validators.required, Validators.minLength(10)]),
            completed: new FormControl(this.data?.card?.completed)
        });
    }

    createNewCard(): void {
        const {completed, title} = this.form.value;
        const newTodo: CardInterface = {
            title,
            userId: 1,
            completed
        };
        this.dialogRef.close(newTodo);
    }

    editCard(): void {
        const {completed, title} = this.form.value;
        const newTodo = {
            id: this.data.card.id,
            title,
            userId: this.data.card.userId,
            completed
        };
        this.dialogRef.close(newTodo);
    }

    closeDialog(option?: DialogOptionsType): void {
        if (!option) {
            this.dialogRef.close(null);
        }
        if (option === 'Create') {
            this.createNewCard();
        }
        if (option === 'Update') {
            this.editCard();
        }
    }
}
