import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class HarryPotterService {
  private readonly baseUrl = 'https://hp-api.onrender.com/api';

  readonly characters = signal<Character[]>([]);
  readonly filteredCharacters = signal<Character[]>([]);
  readonly selectedCharacter = signal<Character | null>(null);
  readonly selectedHouse = signal<string>('');
  readonly loading = signal<boolean>(false);
  readonly errorMessage = signal<string>('');

  constructor(private readonly http: HttpClient) {}

  getAllCharacters() {
    this.loading.set(true);
    this.errorMessage.set('');

    return this.http.get<Character[]>(`${this.baseUrl}/characters`).pipe(
      tap({
        next: (characters) => {
          this.characters.set(characters);
          this.loading.set(false);
        },
        error: () => {
          this.errorMessage.set('Could not load characters. Please try again.');
          this.loading.set(false);
        }
      })
    );
  }

  getCharactersByHouse(house: string) {
    this.loading.set(true);
    this.errorMessage.set('');
    this.selectedHouse.set(house);

    return this.http.get<Character[]>(`${this.baseUrl}/characters/house/${house}`).pipe(
      tap({
        next: (characters) => {
          this.filteredCharacters.set(characters);
          this.loading.set(false);
        },
        error: () => {
          this.errorMessage.set('Could not load house characters. Please try again.');
          this.loading.set(false);
        }
      })
    );
  }

  getCharacterById(id: string) {
    this.loading.set(true);
    this.errorMessage.set('');

    return this.http.get<Character[]>(`${this.baseUrl}/character/${id}`).pipe(
      tap({
        next: (characters) => {
          this.selectedCharacter.set(characters[0] ?? null);
          this.loading.set(false);
        },
        error: () => {
          this.errorMessage.set('Could not load character details.');
          this.loading.set(false);
        }
      })
    );
  }
}
