import { Component } from '@angular/core';

@Component({
  selector: 'app-acknowledgments',
  standalone: true,
  imports: [],
  templateUrl: './acknowledgments.html',
  styleUrl: './acknowledgments.css',
})

/**
 * Variables de control,
 * se usan para saber si el desplegable
 * está activo o no
 */
export class Acknowledgments {
  isOpenInfra = false;
  isOpenEst = false;
  isOpenSoc = false;
}
