import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute } from '@angular/router';
import { FallbackPipe } from '../../pipes/fallback.pipe';
import { HarryPotterService } from '../../services/harry-potter.service';

@Component({
  selector: 'app-characterdetails',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatProgressSpinnerModule, FallbackPipe],
  templateUrl: './characterdetails.component.html',
  styleUrl: './characterdetails.component.css'
})
export class CharacterdetailsComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    public readonly hpService: HarryPotterService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.hpService.getCharacterById(id).subscribe();
    } else {
      this.hpService.errorMessage.set('Character ID is missing.');
    }
  }
}
