# mtnlibraryjs
Very small library with tools for namespaces, search using arrow keys with where any and first to retrieve a lista, check or get a model on array.

## **Samples: **

**//creating a sample array to test.**
var arr = [{id:1,name:'test, type:'car' },{id:2,name:'test',type:'car' },{id:3,name:'test',type:'another' }];

### **Using lambda syntax**

###### whereMtn([arrayObject],'[lambda syntax]') to search an array object and return a list of objects from the lambda query
var list = Mtn.whereMtn(arr, 'x=> x.name=="test"');
**// will return [{id:1,name:'test, type:'car' },{id:2,name:'test',type:'car' },{id:3,name:'test',type:'another' }];**

list = Mtn.whereMtn(arr, 'x=> x.type=="car"');
**// will return [{id:1,name:'test, type:'car' },{id:2,name:'test',type:'car' }];**

###### any([arrayObject],'[lambda syntax]') to search an array object and return true or false if found one case
console.log(Mtn.any(arr, 'x=> x.id==' + '1'));
**// will return true**

###### firstMtn([arrayObject],'[lambda syntax]') to search an array object and return the first object
var model = Mtn.firstMtn(arr, 'x=> x.id==1');
**// will return {id:1,name:'test, type:'car' }**

### Utilities

###### ns([stringObject]) to create a javascript Namespace
Mtn.ns('Mtn.MyNamespace.Other.model');
**// will create on dom a object with that structure and you can access using javascript directly like :**
Mtn.MyNamespace.Other.model = { id:1, name:'teste'}; 
**// its ok, dont get a error now**

###### isEmpty([stringObject]) to return true if is empty
Mtn.utils.isEmpty(stringObject) 
**// return true or false if is not string or lenght ==0**

###### isNullOrUndefined([stringObject]) to return true if is null or undefined
Mtn.isNullOrUndefined(object) 
**// return true if is null or undefined**

###### id('[optionalPrefix]',[matchDate, true or false]) create a guid using prefix or if is null or undefined will show id-guid, will find that id on DOM to avoid duplicate,  matchDate (default is false) if true, will use date to create the id
Mtn.id(optionalPrefix, matchDate) ; 
**/*
will return a guid using prefix or if is null or undefined will show id-guid
will find that id on DOM to avoid duplicate
matchDate (default is false) if true, will use date to create the id
*/**

###### getType([Object]) to return type name
Mtn.getType(obj);
**// return type name, get from jquery https://github.com/jquery/jquery/blob/master/LICENSE.txt**

###### isFunction([Object]) to return if is a function
Mtn.isFunction(functionObject); 
**// return if is a function , get from jquery https://github.com/jquery/jquery/blob/master/LICENSE.txt**

###### trim([stringObject]) to remove spaces from left and right
Mtn.trim(string); 
**//get from jquery https://github.com/jquery/jquery/blob/master/LICENSE.txt**

###### reset([Object]) reset all values on object to ''
Mtn.reset(obj);
**//reset all values to ''**

###### removeAt([Object]) remove from array the exact position informed
Mtn.removeAt(array,pos) ; 

###### multipleFile([Object]) return true if can use multiple file
Mtn.support.multipleFile 

###### uploadXhr([Object]) return true if can use multiple file and can use XMLHttpRequest.upload
Mtn.support.uploadXhr 
**//return true if can use multiple file and can use XMLHttpRequest.upload**

###### clearAllTimeouts() stop all events (created using setTimeout or setInterval)
Mtn.clearAllTimeouts(); 
**// be careful, just use if you really know what you are doing, or the consequences can be unpredictable, not responsible for library misuse**
