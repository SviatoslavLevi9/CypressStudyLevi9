/// <reference types="Cypress" /> 

declare namespace Cypress { 

  interface Chainable<Subject = any> { 
  
  login(email: string, password: string): Chainable<any>; 
  
  }
}

