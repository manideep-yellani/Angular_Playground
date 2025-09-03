import { Component } from '@angular/core';
import { FileComp } from "../file-comp/file-comp";
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faFile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-folder-comp',
  imports: [FileComp, FaIconComponent],
  templateUrl: './folder-comp.html',
  styleUrl: './folder-comp.css',
  inputs:['folderStruct']
})
export class FolderComp {
folderStruct:any;
folderIcon=faFolder
toggle=false
fileCon=faFile

}
