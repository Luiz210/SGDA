import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroUsuarioService } from '../service/cadastro-usuario.service';
import { Role } from '../classes/Role';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.scss']
})
export class TelaCadastroComponent {
  viewModal: boolean = false;
  role: Role = new Role;

  constructor(
    private route: Router,
    private fb: FormBuilder,
    private cadastroService: CadastroUsuarioService,
    private notificationService: NotificationService
  ) {}
  cadastroForm: FormGroup;

  ngOnInit() {
    this.createCadastro();
    this.role.id = 0;
  }

  cadastrar() {
    const usuario = this.cadastroForm.value;
    this.role.id = Number(usuario.role)
    usuario.role = this.role;
    console.log(usuario);
    this.cadastroService.cadastrarUsuario(usuario).subscribe({
      next: (response) => {
        this.notificationService.showMessage(response);
      },
      error: (e) => {
        this.notificationService.showMessage(e.error);
      }
    });
    this.route.navigate(['']);
  }

  createCadastro() {
    this.cadastroForm = this.fb.group({
      role: ['', Validators.required],
      usuario: ['', Validators.required],
      cnpj: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.required],
      endereco: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }
}
