import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError, debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-home',
  template: `
<pre>
GOAL: use RxJS operators 
with Reactive Forms
</pre>
    
    <div class="card text-center" >
      <!--Search city input -->
      <div class="card-header">
        <input
          class="form-control"
          type="text"placeholder="Search City" [formControl]="cityInput" />
      </div>

      <div *ngIf="meteo && !meteo.error">
        
        <!--Map-->
        <img
          [src]="meteo?.map" 
          width="100%" 
          alt="map"
        />
        
        <!--Weather Icon-->
        <div class="title-bar">
          {{meteo.temperature}}°
          <img [src]="meteo.icon" alt="icon" />
        </div>
        
      </div>
      
      <div *ngIf="meteo?.error">
        No city found
      </div>

    </div>
  `,
})
export class MeteoComponent implements OnInit {
  meteo: { map?: string, icon?: string, temperature?: string, error: boolean };
  cityInput: FormControl = new FormControl();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.cityInput.valueChanges
      .pipe(
        filter(text => text.length > 2),
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap(
          text => this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&APPID=eb03b1f5e5afb5f4a4edb40c1ef2f534`)
            .pipe(
              map((meteo: any) => {
                return {
                  temperature: meteo.main.temp,
                  icon: 'http://openweathermap.org/img/w/' + meteo.weather[0].icon + '.png',
                  map: 'https://maps.googleapis.com/maps/api/staticmap?center=' + text + '&zoom=7&size=200x100&key=AIzaSyDSBmiSWV4-AfzaTPNSJhu-awtfBNi9o2k',
                  error: false
                };
              }),
              catchError(() => of({ error: true}))
            )
        ),
      )
      .subscribe(result => {
        console.log(result);
        this.meteo = result;
      });

    this.cityInput.setValue('milan');
  }

}











// StackBlitz
// https://stackblitz.com/edit/rxjs-angular-reactive-form-control-example?file=src%2Fapp%2Fapp.component.ts

// Pastebin
// https://pastebin.com/u0yH9YaH
