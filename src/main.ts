import { bootstrapApplication } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { appConfig } from './root/root.config';
import { RootComponent } from './root/root.component';

enableProdMode();

bootstrapApplication(RootComponent, appConfig).catch((err) =>
  console.error(err)
);
