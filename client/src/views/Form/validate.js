const validate = (dogData) => {
    const errors = {};

    if(dogData.name){
        
            if(!/^[a-z]+$/.test(dogData.name)) errors.name = "Writing lowercase letters"
            else errors.name = "";
    }else{
        if(!dogData.name) errors.name = "The name of the dog cannot be null";
    }
    
    if(dogData.max_height){
        
        if(!/^[0-9]+$/.test(dogData.max_height)) errors.max_height = "Write only numbers ";
        else if(parseInt(dogData.max_height <= 0)) errors.max_height = "Max-height cannot be less than or equal to 0";
        else errors.max_height = "";
    }else{
        if(!dogData.max_height) errors.max_height = "The height of the dog cannot be null";
    }
        
    if(dogData.min_height){
        
            if(!/^[0-9]+$/.test(dogData.min_height)) errors.min_height = "Write only numbers ";
            else if(parseInt(dogData.min_height) >= parseInt(dogData.max_height)) errors.min_height = "Min-height cannot be greater than or equal to max-height ";
            else if(parseInt(dogData.min_height) <=0) errors.min_height = "Min-height cannot be less than or equal to 0";
            else errors.min_height = "";
    }else{
        if(!dogData.min_height) errors.min_height = "The height of the dog cannot be null";
    }
        
    if(dogData.max_weight){
        
            if(!/^[0-9]+$/.test(dogData.max_weight)) errors.max_weight = "Write only numbers ";
            else if(parseInt(dogData.max_weight) <= 0) errors.max_weight = "Max-Weight cannot be less than or equal to 0";
            else errors.max_weight = "";
    }else{
if(!dogData.max_weight) errors.max_weight = "The weight of the dog cannot be null";
    }
    

    if(dogData.min_weight){
        
            if(!/^[0-9]+$/.test(dogData.min_weight)) errors.min_weight = "Write only numbers ";
            else if(parseInt(dogData.min_weight) >= parseInt(dogData.max_weight)) errors.min_weight = "Min-Weight cannot be greater than or equal to max-width ";
            else if(parseInt(dogData.min_weight) <= 0) errors.min_weight = "Min-Weight cannot be less than or equal to 0";
            else errors.min_weight = "";
    }else{
        if(!dogData.min_weight) errors.min_weight = "The weight of the dog cannot be null";
    }
        

    if(dogData.lifeYears){
        
            if(!/^[0-9]+$/.test(dogData.lifeYears)) errors.lifeYears = "Write only numbers ";
            else if(parseInt(dogData.lifeYears) <= 0) errors.lifeYears = "The life years cannot be less than or equal to 0";
            else errors.lifeYears = "";
    }else {
        if(!dogData.lifeYears) errors.lifeYears = "The life years of the dog cannot be null";
    }
if(dogData.temperament){
    if(dogData.temperament.length < 0) errors.temperament = "The temperaments of the dog cannot be null";
}
    
    if(dogData.image){
        // eslint-disable-next-line
        if(!/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(dogData.image)) errors.image = "The entered URL is not correct";
        else if(!/.(gif|jpeg|jpg|png)$/i.test(dogData.image)) errors.image = "Supported extensions: JPEG, JPG and PNG";
        else errors.image = "";
    }

    return errors;
}

export default validate