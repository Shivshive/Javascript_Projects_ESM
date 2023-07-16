import { setWorldConstructor, IWorldOptions } from "@cucumber/cucumber";


type context = {
    [key: string]: string;
  };

export interface CustomWorld {
    context:context
    count: number
    eat: (count: number) => void
  }
  
  // setWorldConstructor(function(this: CustomWorld, options: IWorldOptions) {
  //   this.count = 0
  //   this.eat = (count) => this.count += count
  // })
