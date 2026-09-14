import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EuiButton } from 'ensemble-ui/angular';

@Component({
  selector: 'eui-root',
  imports: [RouterOutlet, EuiButton],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('EnsembleUI-LAB');
}
