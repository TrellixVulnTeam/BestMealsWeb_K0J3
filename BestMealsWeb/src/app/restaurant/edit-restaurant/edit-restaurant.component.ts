import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RestaurantService } from 'src/app/shared/services/restaurant.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { Restaurant } from 'src/app/shared/models/restaurant.model';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css']
})
export class EditRestaurantComponent implements OnInit {

  public restaurant: Restaurant;

  constructor(
    public restaurantService: RestaurantService,
    public dialogRef: MatDialogRef<EditRestaurantComponent>,
    @Inject(MAT_DIALOG_DATA) public restaurantData: any
  ) { }

  onEditSave(form: NgForm){
    if (form.invalid) {
      return;
    }

    this.restaurantService.updateRestaurant(this.restaurantData.id, form.value.name, form.value.address, form.value.city, form.value.state, form.value.zipCode);
    form.resetForm();
    this.dialogRef.close();
    window.location.reload();

  }

  cancel(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
