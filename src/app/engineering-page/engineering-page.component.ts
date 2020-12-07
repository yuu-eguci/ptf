import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'magnific-popup';

@Component({
  selector: 'app-engineering-page',
  templateUrl: './engineering-page.component.html',
  styleUrls: ['./engineering-page.component.sass']
})
export class EngineeringPageComponent implements OnInit {

  skillSetFramework: {}[] = [
    {
      skillTitle: 'Django',
      iClass: 'devicon-django-plain',
      color: '#fff',
      backgroundColor: '#d06d8c',
    },
    {
      skillTitle: '.NET',
      iClass: 'devicon-dot-net-plain-wordmark',
      color: '#fff',
      backgroundColor: '#65ace4',
    },
    {
      skillTitle: 'Angular',
      iClass: 'devicon-angularjs-plain',
      color: '#fff',
      backgroundColor: '#a0c238',
    },
    {
      skillTitle: 'Bootstrap',
      iClass: 'devicon-bootstrap-plain',
      color: '#fff',
      backgroundColor: '#56a764',
    },
  ];

  skillSetDatabase: {}[] = [
    {
      skillTitle: 'MySQL',
      iClass: 'devicon-mysql-plain',
      color: '#fff',
      backgroundColor: '#d16b16',
    },
    {
      skillTitle: 'SqlServer',
      iClass: 'fas fa-server',
      color: '#fff',
      backgroundColor: '#cc528b',
    },
  ];

  skillSetVersioning: {}[] = [
    {
      skillTitle: 'Git',
      iClass: 'devicon-git-plain',
      color: '#fff',
      backgroundColor: '#9460a0',
    },
    {
      skillTitle: 'GitHub',
      iClass: 'devicon-github-plain',
      color: '#fff',
      backgroundColor: '#0074bf',
    },
    {
      skillTitle: 'GitLab',
      iClass: 'devicon-gitlab-plain',
      color: '#fff',
      backgroundColor: '#b80117',
    },
  ];

  skillSetEditor: {}[] = [
    {
      skillTitle: 'Visual Studio Code',
      iClass: 'devicon-visualstudio-plain',
      color: '#fff',
      backgroundColor: '#222584',
    },
    {
      skillTitle: 'Sublime Text3',
      iClass: 'devicon-devicon-plain',
      color: '#fff',
      backgroundColor: '#00904a',
    },
  ];

  skillSetPlatform: {}[] = [
    {
      skillTitle: 'heroku',
      iClass: 'devicon-heroku-original',
      color: '#fff',
      backgroundColor: '#edc600',
    },
    {
      skillTitle: 'Linux',
      iClass: 'devicon-linux-plain',
      color: '#fff',
      backgroundColor: '#261e1c',
    },
  ];

  skillSetFrontEnd: {}[] = [
    {
      skillTitle: 'HTML',
      iClass: 'devicon-html5-plain',
      color: '#fff',
      backgroundColor: '#6d1782',
    },
    {
      skillTitle: 'CSS',
      iClass: 'devicon-css3-plain',
      color: '#fff',
      backgroundColor: '#8f253b',
    },
    {
      skillTitle: 'JavaScript',
      iClass: 'devicon-javascript-plain',
      color: '#fff',
      backgroundColor: '#a0c238',
    },
    {
      skillTitle: 'TypeScript',
      iClass: 'devicon-typescript-plain',
      color: '#fff',
      backgroundColor: '#d16b16',
    },
  ];

  skillSetBackEnd: {}[] = [
    {
      skillTitle: 'Python',
      iClass: 'devicon-python-plain',
      color: '#fff',
      backgroundColor: '#0168b3',
    },
    {
      skillTitle: 'C#',
      iClass: 'devicon-csharp-plain',
      color: '#fff',
      backgroundColor: '#b88b26',
    },
    {
      skillTitle: 'PHP',
      iClass: 'devicon-php-plain',
      color: '#fff',
      backgroundColor: '#c30068',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    $('.portfolio-img').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true,
        preload: [0, 2],
        navigateByImgClick: true,
        tPrev: 'Previous',
        tNext: 'Next'
      }
    });
  }

}
