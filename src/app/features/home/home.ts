import { Component, inject } from '@angular/core';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';

@Component({
    imports: [RouterLink],
    selector: 'app-home',
    styleUrl: './home.css',
    templateUrl: './home.html',
})
export class Home {

    private route = inject(ActivatedRoute);
    private router = inject(Router);

    number: number = 100;
    counter: number = 0;

    add(cuantity: number) {
        this.counter += cuantity;
    }

    goToHome() {
        this.router.navigate(['item'], { relativeTo: this.route });
    }
}
