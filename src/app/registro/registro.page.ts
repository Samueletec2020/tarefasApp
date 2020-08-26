import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { noUndefined } from '@angular/compiler/src/util';
import { CpfValidator } from '../validators/cpf-validator';
import { ComparacaoValidator } from '../validators/comparacao-validator';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public formRegistro: FormGroup;
  public validacao={
    nome: [
      {tipo: 'required', mensagem: 'O campo nome é obrigatório!'},
      { tipo: 'minLength', mensagem: 'O nome deve ter no mínimo 3 caracteres' }
    ],
    cpf: [
      {tipo: 'required', mensagem: 'O campo cpf é obrigatório!'},
      { tipo: 'maxLength', mensagem: 'O cpf deve ter no máximo 14 caracteres' },
      { tipo: 'minLength', mensagem: 'O cpf deve ter no mínimo 11 caracteres' },
      {tipo: 'invalido', mensagem: 'Cpf inválido!'}
    ],
    data: [
      {tipo: 'required', mensagem: 'O campo data de nascimento é obrigatório!'}
    ],
    genero: [
      {tipo: 'required', mensagem: 'O campo gênero é obrigatório!'}
    ],
    celular: [
      { tipo: 'maxLength', mensagem: 'O campo celular tem no máximo 16 caracteres' }
    ],
    email: [
      {tipo: 'required', mensagem: 'O campo email é obrigatório!'},
      { tipo: 'email', mensagem: 'email inválido' }
    ],
    senha: [
      {tipo: 'required', mensagem: 'O campo senha é obrigatório' },
      {tipo: 'minLength', mensagem: 'A senha deve ter no mínimo 6 caracteres' }
    ],

    confirmarsenha: [
      {tipo: 'required', mensagem: 'O campo confirmar senha é obrigatório' },
      {tipo: 'minLength', mensagem: 'A senha deve ter no mínimo 6 caracteres' },
      {tipo: 'comparacao', mensagem: 'Deve ser igual a senha'}
    ]
  };
    

    
    
    
    



  constructor(private formBuilder: FormBuilder) { 
    this.formRegistro = formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      cpf: ['', Validators.compose([Validators.required, 
            Validators.maxLength(14),
             Validators.minLength(11),
            CpfValidator.cpfValido])], 
      data: ['', Validators.compose([Validators.required])],
      genero: ['', Validators.compose([Validators.required])],
      celular: ['', Validators.compose([ Validators.maxLength(16)])],
      email: ['', Validators.compose([Validators.required, Validators.email])], 
      senha: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmarsenha: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    }, {
    validator: ComparacaoValidator('senha','confirmarsenha')
    });
   }

  ngOnInit() {
  }

  public cadastro() {
    if(this.formRegistro.valid){
    console.log('Formulário válido');
    }else{
      console.log('Formulário inválido');
    }
  }

}