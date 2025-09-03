import { Component } from '@angular/core';
import data from "./data.json";
import { FolderComp } from "./folder-comp/folder-comp";
@Component({
  selector: 'app-a9-1-folder-structure',
  imports: [FolderComp],
  templateUrl: './a9-1-folder-structure.html',
  styleUrl: './a9-1-folder-structure.css'
})
export class A91FolderStructure {
  folderStruct:any=data;

}
