import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NicknameEditorComponent } from './components/nickname-editor/nickname-editor.component';
import { AngularMaterialModule } from '../vendor/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NicknameEditorComponent],
  imports: [AngularMaterialModule, CommonModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    NicknameEditorComponent,
  ],
})
export class SharedModule {}
