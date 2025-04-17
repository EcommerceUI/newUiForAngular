import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
//   constructor(private commonapi: CommonService) { }
//   ngOnInit() {
//     this.getProfileHistory();
//   }
//   getProfileHistory() {
//     const req = {
//       dataCode: 'GET_ORGANIZATION_AND_USER_DETAILS_BY_ID',
//       "placeholderKeyValueMap": {
//         companyId: localStorage.getItem('orgId'),
//         userId: localStorage.getItem('userId')
//       }
//     };  
//      this.commonapi.commonData(req).subscribe((res) => {
//     console.log(res);
    
//   });
// }



// profileImageUrl = 'https://via.placeholder.com/150'; // default image

// profile = {
//   username: '',
//   role: '',
//   email_id: '',
//   alternate_contact_number: '',
//   phone: '',
//   landline_number: '',
//   company_name: '',
//   company_short_name: '',
//   website_url: '',
//   gst: '',
//   business_pan_card: '',
//   registration_number: '',
//   date_of_establishment: '',
//   country_of_incorporation:''
// };

// onImageUpload(event: any): void {
//   const file = event.target.files[0];
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = e => this.profileImageUrl = reader.result as string;
//     reader.readAsDataURL(file);
//   }
// }
// }




isEditMode = false;

profile = {
  username: '',
  role: '',
  email_id: '',
  phone: '',
  company_name: '',
  website_url: ''
};

profileFields: { label: string, value: string }[] = [];
profileImageUrl = 'https://via.placeholder.com/150';

constructor(private commonapi: CommonService) {}

ngOnInit(): void {
  this.getProfileHistory();
}

getProfileHistory(): void {
  const req = {
    dataCode: 'GET_ORGANIZATION_AND_USER_DETAILS_BY_ID',
    placeholderKeyValueMap: {
      userId: localStorage.getItem('userId')
    }
  };

  this.commonapi.commonData(req).subscribe((res: any) => {
    if (res && res.responseContent && res.responseContent.length > 0) {
      const data = res.responseContent[0];

      this.profile = {
        username: data.username || '',
        role: data.role || '',
        email_id: data.email_id || data.email || '',
        phone: data.phone || '',
        company_name: data.company_name || '',
        website_url: data.website_url || ''
      };

      this.updateProfileFields();

      if (data.profile_image_url) {
        this.profileImageUrl = data.profile_image_url;
      }
    }
  });
}

updateProfileFields(): void {
  this.profileFields = [
    { label: 'Username', value: this.profile.username },
    { label: 'Role', value: this.profile.role },
    { label: 'Email', value: this.profile.email_id },
    { label: 'Phone Number', value: this.profile.phone },
    { label: 'Company Name', value: this.profile.company_name },
    { label: 'Website', value: this.profile.website_url }
  ];
}

toggleEdit(): void {
  this.isEditMode = !this.isEditMode;

  if (!this.isEditMode) {
    console.log('Save updated data:', this.profile);
  }
}
onImageUpload(event: any): void {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      this.profileImageUrl = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}

}
