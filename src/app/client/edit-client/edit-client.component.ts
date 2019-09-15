import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  client: Client;

  cliente: FormGroup;

  constructor(private service: ClientService, private formBuilder: FormBuilder,
              private route: ActivatedRoute, private router: Router) {
               }

  ngOnInit() {

    this.cliente = this.formBuilder.group({

      name: null,
      cpf: null,
      dateOfBirth: null,
      profession: null,
      rg: null,
      address: null,
      email: null,
      telephone: null,
    }, { validators: Validators.required});


    this.route.params.pipe(
      switchMap( (params: Params) => this.loadClient(+params['id']) )
    ).subscribe( (cliente: Client) => this.client = cliente );
  }

  onSubmit(form: any) {
    
    this.service.add(new Client(form.name, form.CPF, form.dateOfBirth, form.profession, form.RG, form.address, form.email, form.telephone));
    
    this.router.navigate(['/books', this.client.id]);
  }

  loadClient(id: number): Promise<Client> {
    return new Promise( (resolve) => resolve(this.service.getById(id)));
  }

  show(){
    this.router.navigate(['/client', this.client.id]);
    return false;
  }

  back(){
    this.router.navigate(['/client/list']);
    return false;
  }


}
