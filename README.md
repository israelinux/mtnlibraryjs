# mtnlibraryjs
Very small library with tools for namespaces, search using arrow keys with where any and first to retrieve a lista, check or get a model on array.

##Samples:

####var arr = [{id:1,name:'test, type:'car' },{id:2,name:'test',type:'car' },{id:3,name:'test',type:'another' }];

####var list = Mtn.whereMtn(arr, 'x=> x.name=="test"');
// will return [{id:1,name:'test, type:'car' },{id:2,name:'test',type:'car' },{id:3,name:'test',type:'another' }];

####list = Mtn.whereMtn(arr, 'x=> x.type=="car"');
// will return [{id:1,name:'test, type:'car' },{id:2,name:'test',type:'car' }];

####console.log(Mtn.any(arr, 'x=> x.id==' + '1'));
// will return true

####var model = Mtn.firstMtn(arr, 'x=> x.id==1');
// will return {id:1,name:'test, type:'car' }


####Mtn.ns('Mtn.MyNamespace.Other.model');
// will create on dom a object with that structure and you can access using javascript directly like :

####Mtn.MyNamespace.Other.model = { id:1, name:'teste'}; 
// its ok, dont get a error

####Mtn.utils.isEmpty(stringObject) 
// return true or false if is not string or lenght ==0

####Mtn.isNullOrUndefined(object) 
// return true if is null or undefined

####Mtn.id(optionalPrefix, matchDate) ; 
// will return a guid using prefix or if is null or undefined will show id-guid
// will find that id on DOM to avoid duplicate
// matchDate (default is false) if true, will use date to create the id

####Mtn.getType(obj);
// return type name, get from jquery https://github.com/jquery/jquery/blob/master/LICENSE.txt 

####Mtn.isFunction(functionObject); 
// return if is a function , get from jquery https://github.com/jquery/jquery/blob/master/LICENSE.txt 

####Mtn.trim(string); 
//get from jquery https://github.com/jquery/jquery/blob/master/LICENSE.txt 

####Mtn.reset(obj); 
//reset all values to ''

####Mtn.removeAt(array,pos) ; 
//remove from array the exact position informed

####Mtn.support.multipleFile 
//return true if can use multiple file

####Mtn.support.uploadXhr 
//return true if can use multiple file and can use XMLHttpRequest.upload

