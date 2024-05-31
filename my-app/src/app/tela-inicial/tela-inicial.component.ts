import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { ViewTelasService } from '../service/view-telas.service';
import { Router } from '@angular/router';
import { Role } from '../classes/Role';
import { CadastroUsuarioService } from '../service/cadastro-usuario.service';
import { NotificationService } from '../service/notification.service';


@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.scss']
})
export class TelaInicialComponent {
  cadastroForm: FormGroup;
  loginForm: FormGroup;
  proximoCadastro: boolean = true;
  inputsCadastro: boolean = false;
  role: Role = new Role;

  constructor(private fb: FormBuilder, 
    private loginService: LoginService, 
    private viewTelasService: ViewTelasService, 
    private cadastroService: CadastroUsuarioService,
    private router: Router,
    private notificationService: NotificationService) {}
  
  ngOnInit() {
    this.createCadastro();
    this.createLogin();
  }

  createLogin() {
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required],
      cnpj: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  isRoleValid(): boolean {
    return this.cadastroForm.get('role')?.valid ?? false;
  }

  logar() {
    const usuario = this.loginForm.value;
    this.loginService.login(usuario).subscribe(response => {
      if (response.role.name === "vendedor") {
        this.loginService.setIdUsuario(response.id);
        this.viewTelasService.setLoginEmpresa(true);
        this.viewTelasService.setLoginDoador(false);
        this.viewTelasService.setLoginGestor(false);
        this.router.navigate(['/Logado']);
      }
      else if (response.role.name === "admin") {
        this.loginService.setIdUsuario(response.id);
        this.loginService.setUsuarioSaldo(response.saldo);
        this.viewTelasService.setLoginGestor(true);
        this.viewTelasService.setLoginDoador(false);
        this.viewTelasService.setLoginEmpresa(false);
        this.router.navigate(['/Logado']);

      }
      else if (response.role.name === "doador") {
        this.loginService.setIdUsuario(response.id);
        this.viewTelasService.setLoginDoador(true);
        this.viewTelasService.setLoginEmpresa(false);
        this.viewTelasService.setLoginGestor(false);
        this.router.navigate(['/Logado']);
      }
      else {
        alert("Não foi possivel fazer login");
      }
    })
  }

  cadastrar() {
    const usuario = this.cadastroForm.value;
    this.role.id = Number(usuario.role)
    usuario.role = this.role;
    console.log(usuario);
    this.cadastroService.cadastrarUsuario(usuario).subscribe({
      next: (response) => {
        this.notificationService.showMessage(response);
        this.cadastroForm.reset();
      },
      error: (e) => {
        this.notificationService.showMessage(e.error);
        this.cadastroForm.reset();
      },
      complete: () => {
        this.cadastroForm.reset();
      }
    });
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
