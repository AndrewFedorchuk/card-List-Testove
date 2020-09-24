import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpWorkService} from '../shared/http-work.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

    form: FormGroup;

    constructor(
        private usersService: HttpWorkService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.form = new FormGroup({
                name: new FormControl(''),
                username: new FormControl(''),
                email: new FormControl('', [Validators.required, Validators.email]),
                phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
                address: new FormGroup({
                    street: new FormControl(''),
                    suite: new FormControl(''),
                    city: new FormControl(''),
                    zipcode: new FormControl(''),
                })
            },
        );
    }

    createNewUser(): void {
        this.usersService.addUser(this.form.value).subscribe(
            () => {
                this.form.reset();
                this.router.navigate(['/card-list']);
            }
        );

    }
}
