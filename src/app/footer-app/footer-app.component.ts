import { Component } from '@angular/core';
import { SociaMedia } from '../models/SociaMedia.interface';
import { AngularFaviconService } from 'angular-favicon';



@Component({
  selector: 'app-footer-app',
  templateUrl: './footer-app.component.html',
  styleUrls: ['./footer-app.component.css']
})
export class FooterAppComponent {

  data = new Date();

  constructor(private ngxFavicon: AngularFaviconService) {}


  linksSocilaMedia: SociaMedia[] = [
    {
      icon: 'Facebook',
      href: 'https://www.facebook.com/udemy/?locale=ua_UA',
    },
    {
      icon: 'Twitter',
      href: 'https://github.com/EvaSpring111',
    },
    {
      icon: 'Book Store',
      href: 'hhttps://www.google.com.ua/?hl=ua',
    },
    {
      icon: 'Instagram',
      href: 'https://www.instagram.com/',
    },
    {
      icon: 'LinkedIn',
      href: 'https://www.linkedin.com/in/inna-green/',
    },
    {
      icon: 'Github',
      href: 'https://github.com/EvaSpring111',
    },
  ];
}
