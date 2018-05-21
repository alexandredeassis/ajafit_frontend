import {Item} from '../items/item';

export class Day{
    id: number;
    weekday: string;
    date: string;
    descriptions: string;
    snacks: Item[];
    option1: Item;
    option2: Item;
    option3: Item;
    snacks1: Item[];
    snacks2: Item[];
    snacks3: Item[];
    valid: boolean;
    double = false;

    saladPrice(): number {
        let p = 0;
        
        if(this.option1.checked)
          p = this.option1.price;
    
      
        if(this.option2.checked)
          p = p>0? p+(this.option2.price/2):this.option2.price;
    
         
        if(this.option3.checked)
          p = p>0? p+(this.option3.price/2):this.option3.price;
    
        if(this.double)
          p += p/2;
        
        return p;
      }

      saladCount(): number{
        let c =0;
        if(this.option1.checked)
          c++;
        
        if(this.option2.checked)
          c++;
       
        if(this.option3.checked)
          c++;
         
          return c;
      }


  saladVolume(): string {
    if(this.saladCount() == 2 || this.double){
      return "~700ml";
    }
    else if(this.saladCount() == 1){
      return "~350ml";
    }
    
    return "";
  }

    
  total(): number {
    let p = this.saladPrice();
    for(let i of this.snacks1){
      p = i.checked? p+i.price:p;
    }
    for(let i of this.snacks2){
      p = i.checked? p+i.price:p;
    }
    for(let i of this.snacks3){
      p = i.checked? p+i.price:p;
    }
    
    return p;
  }
}