import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {ObjectDefinitionComponent} from './components/definition/object-definition.component';
import {GeneratorDocComponent} from './components/generator-doc/generator-doc.component';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {DefinitionEditorComponent} from './components/definition-editor/definition-editor.component';
import {GeneratePageComponent} from './pages/generate-page/generate-page.component';
import {FormsModule} from '@angular/forms';
import {DataPreviewComponent} from './components/data-preview/data-preview.component';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDialogModule} from "@angular/material/dialog";
import {DownloadForm} from "./pages/generate-page/download-form/download-form.component";
import {TemplateEditorComponent} from "./components/template-editor/template-editor.component";

@NgModule({
  declarations: [
    AppComponent,
    ObjectDefinitionComponent,
    GeneratorDocComponent,
    DefinitionEditorComponent,
    GeneratePageComponent,
    DataPreviewComponent,
    DownloadForm,
    TemplateEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatListModule,
    MatExpansionModule,
    MatSelectModule,
    MatOptionModule,
    MatIconModule,
    MatDialogModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}