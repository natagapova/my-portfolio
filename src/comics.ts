"use strict";

import { Comic } from './interfacetypes';
import moment from 'moment';

const email: string = "n.agapova@innopolis.university";
const params: URLSearchParams = new URLSearchParams;
params.append('email', email);

const myURL: string = `https://fwd.innopolis.university/api/hw2?email=${params.toString()}`;

fetch(myURL)
    .then((response: Response) => response.json())
    .then((data: string) => {
        // const comicID: string = data;
        // const comicParams: URLSearchParams = new URLSearchParams;
        // comicParams.append('id', comicID);
        // const comicURL: string = `https://fwd.innopolis.university/api/comic?${comicParams.toString()}`;

        const comicURL: string = `https://fwd.innopolis.university/api/comic?id=${data}`;

        fetch(comicURL)
            .then((response: Response) => response.json())
            .then((comicData: Comic) => {
                const img: string = comicData.img;
                const alt: string = comicData.alt;
                const safeTitle: string = comicData.safe_title;
                const pubDate: Date = new Date(
                    parseInt(comicData.year), 
                    parseInt(comicData.month),
                    parseInt(comicData.day)
                );

                const comicImg: HTMLImageElement = document.createElement('img'); 
                comicImg.src = img; 
                comicImg.alt = alt; 
        
                const comicTitle: HTMLHeadingElement = document.createElement('h2'); 
                comicTitle.textContent = safeTitle; 
        
                const comicDate: HTMLParagraphElement = document.createElement('p'); 
                comicDate.textContent = `Published on ${pubDate.toLocaleDateString()}`; 

                const timeAge = moment(pubDate).fromNow();
                comicDate.textContent += ` (${timeAge})`;
        
                const container: HTMLElement | null = document.getElementById('container'); 
        
                if (container !== null) {
                    container.appendChild(comicImg); 
                    container.appendChild(comicTitle); 
                    container.appendChild(comicDate);
                } else {
                    console.error('error');
                }
                
            })
    })
    .catch(error => console.log('Sorry, unpredictable error: ', error));