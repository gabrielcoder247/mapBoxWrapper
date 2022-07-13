// import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
// import { Map, NavigationControl, Marker } from 'maplibre-gl';
// import {Observable} from 'rxjs';
// import {Mapwrapper}from '../../../models/mapwrapper';
// import {select, Store} from '@ngrx/store';
// import {selectMaps} from '../store/selector/map.selectors';
// import {State} from '../store/reducer/map.reducer';

// @Component({
//   selector: 'app-add-map',
//   templateUrl: './add-map.component.html',
//   styleUrls: ['./add-map.component.css']
// })
// export class MapComponent implements OnInit, AfterViewInit, OnDestroy {
//   maps$: Observable<Map[]>;


//   @ViewChild('map')
//   private mapContainer!: ElementRef<HTMLElement>;

//   constructor(private store: Store<State>) {
//         this.maps$ = this.store.pipe(select(selectMaps));
//       }

//   ngOnInit(): void {
//   }

//   ngAfterViewInit() {
//     const initialState = { lng: 139.753, lat: 35.6844, zoom: 14 };

//     this.map = new Map({
//       container: this.mapContainer.nativeElement,
//       style: `https://api.maptiler.com/maps/streets/style.json?key=PA6USGxbiH07YDLnoXaH`,
//       center: [initialState.lng, initialState.lat],
//       zoom: initialState.zoom
//     });

//     let controlOption = {
//       showCompass: true,
//       showZoom: true,
//       visualizePitch: false,
//     }
//     this.map.addControl(new NavigationControl(controlOption), 'top-right');
//     new Marker({color: "#FF0000"})
//       .setLngLat([139.7525,35.6846])
//       .addTo(this.map);
//   }

//   ngOnDestroy() {
//     this.map?.remove();
//   }

// }