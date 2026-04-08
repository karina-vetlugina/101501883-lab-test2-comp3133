import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { FallbackPipe } from '../../pipes/fallback.pipe';
import { HarryPotterService } from '../../services/harry-potter.service';

@Component({
  selector: 'app-characterfilter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FallbackPipe
  ],
  templateUrl: './characterfilter.component.html',
  styleUrl: './characterfilter.component.css'
})
export class CharacterfilterComponent {
  readonly houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
  readonly houseControl = new FormControl<string>('Gryffindor', { nonNullable: true });

  constructor(public readonly hpService: HarryPotterService) {
    this.loadHouseCharacters(this.houseControl.value);
    this.houseControl.valueChanges.subscribe((house) => {
      if (house) {
        this.loadHouseCharacters(house);
      }
    });
  }

  private loadHouseCharacters(house: string): void {
    this.hpService.getCharactersByHouse(house).subscribe();
  }
}
