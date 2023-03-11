 form=document.getElementById('addform');
var exp=document.getElementById('expence');
var des=document.getElementById('description');
var categ=document.getElementById('category');
var itemlist=document.getElementById('users')
document.addEventListener("submit",additem)
localStorage.setItem("UserExpense",expence)
localStorage.setItem("UserDescription",description)
localStorage.setItem("UserCategory",category)
function additem(e){
    e.preventDefault();
    if(exp.value===''|| des.value===''|| categ.calue===''){
        alert("fill the form")
    }
    else{
        let obj={
            expence:exp.value,
            description:des.value,
            category:categ.value
        }
        let Objserialized=JSON.stringify(obj);
        localStorage.setItem(obj.description,Objserialized);
        let Objdeserialized=JSON.parse(localStorage.getItem("Obj"))
    
    var li=document.createElement('li')
    li.className="item"
    li.appendChild(document.createTextNode(localStorage.getItem(obj.description)))
    
    var delbtn=document.createElement('button')
    delbtn.className="delete-button"
    delbtn.appendChild(document.createTextNode('delete'))
    li.appendChild(delbtn)

    var edtbtn=document.createElement('button')
    edtbtn.className="edit-button"
    edtbtn.appendChild(document.createTextNode('edit'))
    li.appendChild(edtbtn)

    itemlist.appendChild(li)



    document.addEventListener('click',deleteitem);

    function deleteitem(e){
        if(e.target==delbtn){
            if(confirm('are you sure want to delete?.')){
                var li=e.target.parentElement;
                localStorage.removeItem(obj.description);
                itemlist.removeChild(li);
               }
        }
    }

    document.addEventListener('click',edititem);

    function edititem(e){
        if(e.target==edtbtn){
            var li=e.target.parentElement;
            for(var i=0;i<itemlist.getElementsByClassName('item').length;i++)
            {
                if(itemlist.getElementsByClassName('item')[i]==li){
                    let myobjdeserializedd=JSON.parse(itemlist.getElementsByClassName('item')[i].firstChild.textContent);

                form.querySelector('#expence').value=myobjdeserializedd.expence
                    form.querySelector('#description').value=myobjdeserializedd.description;
                    form.querySelector('#category').value=myobjdeserializedd.category;
                    localStorage.removeItem(obj.description);
                    }

            }
            itemlist.removeChild(li)
        }
    }

}
}
