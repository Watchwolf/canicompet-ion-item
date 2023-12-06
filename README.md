This component replace `<ion-item (click)=""></ion-item>` by `<a href=""  ...><ion-item></ion-item></a>` to improve SEO.

# Example:

## before:
`
<canicompet-ion-item lines="none" [routerLink]="['/login']">
  blabla
</canicompet-ion-item>
`

## After:
`
<a href="/login">
  <ion-item lines="none" button>
    blabla
  </ion-item>
</a>
`
