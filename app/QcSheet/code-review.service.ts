import { Injectable } from '@angular/core';
import { Http , RequestOptions , Headers} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
// export class CodeReviewService {

//   constructor() { }
// }
export class CodeReviewService {

  http: Http;
  selectedClient = "";
  selectedProject = null;
  selectedType = "";
  selectedTFSDevID = "" ;
  selectedExtension = "";
  selectedTFSSourceCodebase = "";
  selectedRadio = null;
  username = "";
  readonly rootURL = 'http://localhost:52193/api';

  constructor(http: Http) {
    this.http = http;
   }

   category : any[];
   empty : any[];
   Initial_QC_status = false;
   QC_Rework_1 = false;
   Initial_QC_status_failed = false;
   QC_Rework_1_failed = false;

   set_Initial_QC_failed_status(status)
   {
      this.Initial_QC_status_failed = status;
   }

   set_QC_Rework_failed_1(status)
   {
      this.QC_Rework_1_failed = status;
   }

   get_Initial_QC_failed_status()
   {
     return  this.Initial_QC_status_failed
   }

   get_QC_Rework_failed_1()
   {
      return this.QC_Rework_1_failed;
   }

   set_Initial_QC_status(status)
   {
      this.Initial_QC_status = status;
   }

   set_QC_Rework_1(status)
   {
      this.QC_Rework_1 = status;
   }

   get_Initial_QC_status()
   {
     return  this.Initial_QC_status
   }

   get_QC_Rework_1()
   {
      return this.QC_Rework_1;
   }

   SetUser(selectRadio)
   {
      this.selectedRadio = selectRadio;
   }

   setUserValues(selectedRadio,selectedClient, selectedProject,selectedType,selectedTFSDevID,selectedExtension,selectedTFSSourceCodebase,username) 
    {

      this.username = username;
      this.selectedClient = selectedClient;
      this.selectedProject = selectedProject;
      this.selectedType = selectedType;
      this.selectedTFSDevID=selectedTFSDevID
      this.selectedExtension=selectedExtension
      this.selectedTFSSourceCodebase=selectedTFSSourceCodebase;
      this.selectedRadio =selectedRadio;
    }

    validateData()
    {
      debugger;
      if(this.username == "" || this.selectedClient == "" ||  this.selectedProject == "" ||  this.selectedType == "" ||   this.selectedTFSDevID == "" ||
        this.selectedExtension == "" ||   this.selectedTFSSourceCodebase == "" ||  this.selectedRadio == "")
        {
          return false;
        }
        else
        {
          return true;
        }
    }


    saveUserCheckPointData(Check_Id,SelectedRadioButton,Comment)
    {
      debugger;    
        const headers = new  Headers({'Content-Type': 'application/json'});
        const requestOptions = new RequestOptions({headers: headers});      
        if(this.selectedRadio == "Developer")
        {
          const body = {
            'Client_Code':this.selectedClient,      
          'Project_Code':this.selectedProject,      
          'Ext_Code':this.selectedExtension,      
          'Check_Id':Check_Id,
          'Developer' : SelectedRadioButton,
          'Comment':Comment,
          'selectedUser':this.selectedRadio,
          'username' : this.username,
  
          };
          return this.http.post(this.rootURL + '/CheckPoints/saveRadioButtonCheckPoint', body, requestOptions);
        }
        else
        {
          const body = {
            'Client_Code':this.selectedClient,      
          'Project_Code':this.selectedProject,      
          'Ext_Code':this.selectedExtension,      
          'Check_Id':Check_Id,
          'QC_Resource' : SelectedRadioButton,
          'Comment':Comment,
          'selectedUser':this.selectedRadio,
          'username' : this.username,        
          };
          return this.http.post(this.rootURL + '/CheckPoints/saveRadioButtonCheckPoint', body, requestOptions);
        }
    }

    
    saveUserCommentData(Check_Id,Comment)
    {
      debugger;    
        const headers = new  Headers({'Content-Type': 'application/json'});
        const requestOptions = new RequestOptions({headers: headers});      
        if(this.selectedRadio == "Developer")
        {
          const body = {
          'Client_Code':this.selectedClient,      
          'Project_Code':this.selectedProject,      
          'Ext_Code':this.selectedExtension,      
          'Check_Id':Check_Id,
          'Comment':Comment,
          'selectedUser':this.selectedRadio,
          'username' : this.username,
  
          };
          return this.http.post(this.rootURL + '/CheckPoints/saveCommentCheckPoint', body, requestOptions);
        }
        else
        {
          const body = {
            'Client_Code':this.selectedClient,      
          'Project_Code':this.selectedProject,      
          'Ext_Code':this.selectedExtension,      
          'Check_Id':Check_Id,
          'Comment':Comment,
          'selectedUser':this.selectedRadio,
          'username' : this.username,        
          };
          return this.http.post(this.rootURL + '/CheckPoints/saveCommentCheckPoint', body, requestOptions);
        }
    }


    saveUserCheckPointData1(Check_Id,SelectedRadioButton,Comment)
    {
      debugger;    
        const headers = new  Headers({'Content-Type': 'application/json'});
        const requestOptions = new RequestOptions({headers: headers});      
        if(this.selectedRadio == "Developer")
        {
          const body = {
            'Client_Code':this.selectedClient,      
          'Project_Code':this.selectedProject,      
          'Ext_Code':this.selectedExtension,      
          'Check_Id':Check_Id,
          'Developer_1' : SelectedRadioButton,
          'Comment_1':Comment,
          'selectedUser':this.selectedRadio,
          'username_1' : this.username,
  
          };
          return this.http.post(this.rootURL + '/CheckPoints/saveRadioButtonCheckPoint1', body, requestOptions);
        }
        else
        {
          const body = {
            'Client_Code':this.selectedClient,      
          'Project_Code':this.selectedProject,      
          'Ext_Code':this.selectedExtension,      
          'Check_Id':Check_Id,
          'QC_Resource_1' : SelectedRadioButton,
          'Comment_1':Comment,
          'selectedUser':this.selectedRadio,
          'username_1' : this.username,        
          };
          return this.http.post(this.rootURL + '/CheckPoints/saveRadioButtonCheckPoint1', body, requestOptions);
        }
    }

    saveUserCommentData1(Check_Id,Comment)
    {
      debugger;    
        const headers = new  Headers({'Content-Type': 'application/json'});
        const requestOptions = new RequestOptions({headers: headers});      
        if(this.selectedRadio == "Developer")
        {
          const body = {
          'Client_Code':this.selectedClient,      
          'Project_Code':this.selectedProject,      
          'Ext_Code':this.selectedExtension,      
          'Check_Id':Check_Id,
          'Comment_1':Comment,
          'selectedUser':this.selectedRadio,
          'username_1' : this.username,
  
          };
          return this.http.post(this.rootURL + '/CheckPoints/saveCommentCheckPoint1', body, requestOptions);
        }
        else
        {
          const body = {
            'Client_Code':this.selectedClient,      
          'Project_Code':this.selectedProject,      
          'Ext_Code':this.selectedExtension,      
          'Check_Id':Check_Id,
          'Comment_1':Comment,
          'selectedUser':this.selectedRadio,
          'username_1' : this.username,        
          };
          return this.http.post(this.rootURL + '/CheckPoints/saveCommentCheckPoint1', body, requestOptions);
        }
    }

    saveUserCheckPointData2(Check_Id,SelectedRadioButton,Comment)
    {
      debugger;    
        const headers = new  Headers({'Content-Type': 'application/json'});
        const requestOptions = new RequestOptions({headers: headers});      
        if(this.selectedRadio == "Developer")
        {
          const body = {
            'Client_Code':this.selectedClient,      
          'Project_Code':this.selectedProject,      
          'Ext_Code':this.selectedExtension,      
          'Check_Id':Check_Id,
          'Developer_2' : SelectedRadioButton,
          'Comment_2':Comment,
          'selectedUser':this.selectedRadio,
          'username_2' : this.username,
  
          };
          return this.http.post(this.rootURL + '/CheckPoints/saveRadioButtonCheckPoint2', body, requestOptions);
        }
        else
        {
          const body = {
            'Client_Code':this.selectedClient,      
          'Project_Code':this.selectedProject,      
          'Ext_Code':this.selectedExtension,      
          'Check_Id':Check_Id,
          'QC_Resource_2' : SelectedRadioButton,
          'Comment_2':Comment,
          'selectedUser':this.selectedRadio,
          'username_2' : this.username,        
          };
          return this.http.post(this.rootURL + '/CheckPoints/saveRadioButtonCheckPoint2', body, requestOptions);
        }
    }

    saveUserCommentData2(Check_Id,Comment)
    {
      debugger;    
        const headers = new  Headers({'Content-Type': 'application/json'});
        const requestOptions = new RequestOptions({headers: headers});      
        if(this.selectedRadio == "Developer")
        {
          const body = {
          'Client_Code':this.selectedClient,      
          'Project_Code':this.selectedProject,      
          'Ext_Code':this.selectedExtension,      
          'Check_Id':Check_Id,
          'Comment_2':Comment,
          'selectedUser':this.selectedRadio,
          'username_2' : this.username,
  
          };
          return this.http.post(this.rootURL + '/CheckPoints/saveCommentCheckPoint2', body, requestOptions);
        }
        else
        {
          const body = {
            'Client_Code':this.selectedClient,      
          'Project_Code':this.selectedProject,      
          'Ext_Code':this.selectedExtension,      
          'Check_Id':Check_Id,
          'Comment_2':Comment,
          'selectedUser':this.selectedRadio,
          'username_2' : this.username,        
          };
          return this.http.post(this.rootURL + '/CheckPoints/saveCommentCheckPoint2', body, requestOptions);
        }
    }


    SubmitSavedData(Initial_QC,QC_Rework_1,QC_Rework_2 )
  {
      debugger;
      const headers = new  Headers({'Content-Type': 'application/json'});
      const requestOptions = new RequestOptions({headers: headers});

      const body = {
        'Client_Code':this.selectedClient,
      
      'Project_Code':this.selectedProject,

      'Ext_Code':this.selectedExtension,
      
      'Initial_QC' : Initial_QC,
      
      'QC_Rework_1st' : QC_Rework_1,
      
      'QC_Rework_2nd' : QC_Rework_2,

      };
      return this.http.post(this.rootURL + '/CheckPoints/submitClientInfo', body, requestOptions);
  }


   public setcheckPoints(category) {
     
      this.category = category; 
   }

   /**
    * getcheckPoints
    */
   public  getcheckPoints() {
     return this.category;
   }
  public loginUser(username, password,selectedEntry) {
    const headers = new  Headers({'Content-Type': 'application/json'});
    const requestOptions = new RequestOptions({headers: headers});

    const body = {
         Username: username,
         Password: password,
         UserCategory : selectedEntry

    };
    return this.http.post(this.rootURL + '/QcSheet', body, requestOptions);
}

insertUserValues(selectedClient,ProjectCodes, selectedType, selectedTFSDevID,selectedExtension,selectedTFSSourceCodebase )
{
  const headers = new  Headers({'Content-Type': 'application/json'});
  const requestOptions = new RequestOptions({headers: headers});

  const body = {
    'Client_Code':selectedClient,
	
	'Project_Code':ProjectCodes,
	
	'Ext_Code':selectedExtension,
	
	'Type':selectedType,
	
	'TFS_Development_Id':selectedTFSDevID,
	
  'TFS_Source_Code':selectedTFSSourceCodebase,
  
  };
  return this.http.post(this.rootURL + '/CheckPoints/Save', body, requestOptions);
}

LoadSavedData(selectedClient,ProjectCodes,selectedExtension )
{
  debugger;
  const headers = new  Headers({'Content-Type': 'application/json'});
  const requestOptions = new RequestOptions({headers: headers});

  const body = {
    'Client_Code':selectedClient,
	
	'Project_Code':ProjectCodes,
	
	'Extension_Code':selectedExtension,  
  };
  return this.http.post(this.rootURL + '/CheckPoints/LoadSavedUserDATA', body, requestOptions);
}


public CheckPoints() {
  
  const headers = new  Headers({'Content-Type': 'application/json'});
  const requestOptions = new RequestOptions({headers: headers});
//Loading code review check points 
  return this.http.get(this.rootURL + '/CheckPoints/LoadCodeReviewCheckPoints', requestOptions);
}


public UserCheckPoints() {
  
  const headers = new  Headers({'Content-Type': 'application/json'});
  const requestOptions = new RequestOptions({headers: headers});

  return this.http.get(this.rootURL + '/CheckPoints/LoadCodeReviewCheckPoints', requestOptions);
}


public ClientCodeData() {
 
  const headers = new  Headers({'Content-Type': 'application/json'});
  const requestOptions = new RequestOptions({headers: headers});
  return this.http.get(this.rootURL + '/CheckPoints/LoadClientCodes', requestOptions);
}

public ClientCodeProjectCodes(ClientCode) {
 
  const headers = new  Headers({'Content-Type': 'application/json'});
  const requestOptions = new RequestOptions({headers: headers});

  return this.http.get(this.rootURL + '/CheckPoints/ProjectCodes?ClientCode='+ClientCode+'', requestOptions);
}

public ClientCodeType(ClientCode) {
 
  const headers = new  Headers({'Content-Type': 'application/json'});
  const requestOptions = new RequestOptions({headers: headers});

  return this.http.get(this.rootURL + '/CheckPoints/Type?ClientCode='+ClientCode+'', requestOptions);
}

public ExtensionCodes(ClientCode) {
 
  const headers = new  Headers({'Content-Type': 'application/json'});
  const requestOptions = new RequestOptions({headers: headers});

  return this.http.get(this.rootURL + '/CheckPoints/ExtensionCodes?ClientCode='+ClientCode+'', requestOptions);
}

}
