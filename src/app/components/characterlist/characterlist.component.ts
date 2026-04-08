import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';
import { FallbackPipe } from '../../pipes/fallback.pipe';
import { HarryPotterService } from '../../services/harry-potter.service';

@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    FallbackPipe
  ],
  templateUrl: './characterlist.component.html',
  styleUrl: './characterlist.component.css'
})
export class CharacterlistComponent implements OnInit {
  constructor(public readonly hpService: HarryPotterService) {}

  ngOnInit(): void {
    this.hpService.getAllCharacters().subscribe();
  }
}
