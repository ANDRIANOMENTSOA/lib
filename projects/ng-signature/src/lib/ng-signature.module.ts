import { NgModule } from '@angular/core';
import { NgSignatureComponent } from './ng-signature.component';
import { SignaturePadModule } from '@ng-plus/signature-pad';

@NgModule({
  declarations: [NgSignatureComponent],
  imports: [SignaturePadModule],
  exports: [NgSignatureComponent],
})
export class NgSignatureModule {
}
