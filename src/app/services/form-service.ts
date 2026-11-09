import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class FormService {
    http = inject(HttpClient);

}
