import { Pipe,PipeTransform } from '@angular/core';

@Pipe({name:'fahrToCelsius'})
export class FahrToCelsius implements PipeTransform{
    transform(fahr: number): number {
        return Math.round((fahr-32)*(5/9))
    }
}