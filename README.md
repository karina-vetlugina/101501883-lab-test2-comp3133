# COMP3133 Lab Test 2b - Harry Potter Theme

## Student Information
- Name: Karina Vetlugina
- Student ID: 101501883

## App Description
This Angular HTTP Client application displays Harry Potter characters using the HP API.  
It includes a character list, house filter, and character details pages with Angular Material UI and modern Angular template syntax.

## Implemented Features
- Character List page (`/characters`) with clickable cards.
- Character Filter page (`/filter`) using house dropdown selection.
- Character Details page (`/characters/:id`) using route parameter.
- API integration via service (`HttpClientModule`) and TypeScript interfaces.
- `@for`, `@if`, `@switch`, and `signal` usage across components/service.
- Graceful fallbacks for missing image/house/wand fields.

## Screenshots
### Character List UI
![Character List UI](docs/screenshots/character-list.png)
### House Filter UI
![House Filter UI](docs/screenshots/house-filter.png)
### Character Details UI
![Character Details UI](docs/screenshots/character-details.png)


## How to run

### On your computer (localhost)
```bash
npm install
npm start
```
Open **http://localhost:4200** in your browser. The dev server reloads when you change the code.

### On the deployed site (production)
After you deploy (Vercel, Render, or similar), open the **URL your host shows** (for example `https://your-app.vercel.app`).  
Use the same paths as locally: `/characters`, `/filter`, and `/characters/<id>`.

To build the static files yourself before uploading:
```bash
npm install
npm run build
```
Output is in **`dist/101501883-lab-test2-comp3133/browser`** — that folder is what static hosts publish.
