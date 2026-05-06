import { TOTAL_SCREENS } from "./commonUtilis";
import {Subject} from 'rxjs'

import React from 'react'

export default class ScrollService {
   static scrollHandler = new Scheduler();
   
   static currentScreenBroadCaster = new Subject()

   static currrentScreenFadeIn = new Subject();

   constructor() {
     window.addEventListener('document', this.checkCurrentScreenUnderViewport);
   }

   scrollToHireMe = () => {
     let contactMeScreen = document.getElementById("Contact Me");

     if(!contactMeScreen) return;

     contactMeScreen.scrollIntoView({behavior: "smooth"})
   }
   scrollToHome = () => {
     let homeScreen = document.getElementById("Home");

     if(!homeScreen) return;

     homeScreen.scrollIntoView({behavior: "smooth"})
   }

   isElementInView = (elem, type) => {
     let rec = elem.getBoundingClientRect();
     let elementTop = rec.tope;
     let elementBottom = rec.Bottom;

     let partiallyVisible = elementTop < window.innerHeight && elementBottom >= 0;

     let completlyVisible = elementTop >= 0 && elementBottom <= window.innerHeight;

     switch(type) {
        case "partial":
             return partiallyVisible;

        case "complete":
             return completlyVisible

             default: 
                   return false;
     }
   }

   checkCurrentScreenUnderViewport = (event) => {
    if(!event || Object.keys(event).length < 1)
     return;
     for(let screen of TOTAL_SCREENS) {
       let screenFromDom = document.getElementById(screen.screen_name)
       if(!screenFromDom)
        continue;
       
       let fullyVisible = this.isElementInView(screenFromDom, "complete");
       let partiallyVisible = this.isElementInView(screenFromDom, "partial")

       if(fullyVisible || partiallyVisible) {
         if(partiallyVisible && !screen.alreadyRendered) {
            ScrollService.currrentScreenFadeIn.next({
                fadeInScreen: screen.screen_name
            });
            screen['alreadyRendered'] = true;
            break;
         }
         if(fullyVisible) {
            ScrollService.currentScreenBroadCaster.next({
                screenInView: screen.screen_name
            });
            break;
         }
       }

     }
   }
  
}
