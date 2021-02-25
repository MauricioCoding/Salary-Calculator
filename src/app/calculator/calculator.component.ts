import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  currentTax: any = '';
  roundCurrentTax: any = '';
  globalTax: any = '';
  roundGlobalTax: any = '';
  plusTax: any = '';
  salary: any = '';
  noticeMenor = '';
  placeholder = 'ej: ₡1.200.000';
  constructor() { }

  ngOnInit(): void {
  }
  // 7millones a 10 millones 20%
  // 2millones a 6millones 25%
  // 1millon 2millon 100%
  // 1000000 842000 260%
  // 684000 842000 20%
  onSubmit(pSalary: number): number{
    this.currentTax = this.salary;
    this.salary = pSalary;
    if (this.salary >= 684000){
      switch (true){
        case this.salary >= 842000 && this.salary <= 1236000:
          this.currentTax = ((this.currentTax - 842000) * 0.10) * 12;
          break;
        case this.salary >= 1236000 && this.salary <= 2169000:
          this.currentTax = ((1239000 - 842000) * 0.10 + (this.currentTax - 1239000) * 0.15) * 12;
          break;
        case this.salary >= 2169000 && this.salary <= 4337000:
          this.currentTax = ((1236000 - 842000) * 0.10 + (2169000 - 1239000) * 0.15 + (this.currentTax - 2169000) * 0.20) * 12;
          break;
        case this.salary >= 4337000:
          // tslint:disable-next-line:max-line-length
          this.currentTax = ((1236000 - 840000) * 0.10 + (2163000 - 1233000) * 0.15 + (4325000 - 2163000) * 0.20 + (this.currentTax - 4337000) * 0.25) * 12;
          break;
      }
      switch (true){
        case this.salary >= 684000 && this.salary <= 842000:
          this.globalTax = (this.salary * 0.20) * 12;
          this.currentTax = 0;
          break;
        case this.salary >= 842000 && this.salary <= 1000000:
          this.globalTax = (this.currentTax * 0.260) * 12;
          break;
        case this.salary >= 1000000 && this.salary <= 2000000:
          this.globalTax = (this.currentTax * 0.100) * 12;
          break;
        case this.salary >= 2000000 && this.salary <= 6000000:
          this.globalTax = (this.currentTax * 0.25) * 12;
          break;
        case this.salary >= 6000000 && this.salary <= 10000000:
          this.globalTax = (this.currentTax * 0.20) * 12;
          break;
      }
      this.roundCurrentTax = Math.round(this.currentTax);
      this.roundGlobalTax = Math.round(this.globalTax);
      this.plusTax = this.roundGlobalTax - this.roundCurrentTax;
    }
    if (this.salary === ''){
      this.currentTax = 0;
      this.globalTax = 0;
      this.roundGlobalTax = 0;
      this.plusTax = 'No aplica';
      this.roundCurrentTax = 0;
    }
    console.log(this.globalTax , this.roundCurrentTax , this.plusTax);
    return this.currentTax;
  }
}
