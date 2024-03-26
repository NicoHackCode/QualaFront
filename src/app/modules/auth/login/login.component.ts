import { Component, OnInit, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { NotifyService } from 'src/app/shared/components/notify/notify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

/**
 * Representa la clase LoginComponent.
 * Este componente es responsable de manejar la funcionalidad de inicio de sesión.
 */
export default class LoginComponent implements OnInit {

  private notiSrv = inject(NotifyService);
  private fb = inject(UntypedFormBuilder);
  private authSrv = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  protected form: UntypedFormGroup;
  hidePass = true;

  constructor(
    notiSrv: NotifyService,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    const required = Validators.required;
    const emailPattern = Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}');
    const passwordPattern = Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$');

    this.form = this.fb.group({
      userName: new UntypedFormControl(null, Validators.compose([required, emailPattern])),
      password: new UntypedFormControl(null, Validators.compose([required])),
    });
  }

  private hasErrors(): boolean {
    this.form.markAllAsTouched();
    return this.form.invalid;
  }

  protected onSubmit() {
    if (this.hasErrors()) { return; }

    let data = this.form.getRawValue();

    this.authSrv.login(data).subscribe(
      data => {
        this.router.navigate(['home']);
        this.notiSrv.add('Ingreso existoso');
      },
      err => {
        this.form.patchValue({ password: null });
        this.notiSrv.add(err.message);
      }
    )
  }
}
