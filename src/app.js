const ShoppingListApp={
    title:'My Shopping List',
    shoppingList:[],  
    listTitle:'Things to buy',
    listEmpty:'This list is empty',
    theShoppingList(){
        return this. shoppingList.map((item)=>item);
    }
};

const listTitle=()=>{
    return ShoppingListApp.shoppingList.length>0?ShoppingListApp.listTitle:ShoppingListApp.listEmpty;
};

const ShoppingList=()=>{
 let ShopList="";
 for(let i=0;i<=ShoppingListApp.shoppingList.length;i++)
 {
     if(i==0)
     {
        ShopList='<ol>';
     }
     if(i!=ShoppingListApp.shoppingList.length){
     ShopList=ShopList+'<li>'+ShoppingListApp.shoppingList[i]+'</li>';
    }
        if(i==ShoppingListApp.shoppingList.length)
        {
            ShopList=ShopList+'</ol>';
        }
 }
 return ShopList;
};

const OnFormSubmit=(e)=>{
    e.preventDefault();   
    if(e.target.elements.listItem.value){
    ShoppingListApp.shoppingList.push(e.target.elements.listItem.value);
    Render();
    e.target.elements.listItem.value='';
    }
}

const RemoveAllItems=()=>{
    ShoppingListApp.shoppingList=[];
    Render();
}

const Render=()=>{
const template=(<div>
    <h1>{ShoppingListApp.title}</h1>
    <br />
   
    <br />
    <h3>{listTitle()}</h3>
    <br />
<form onSubmit={OnFormSubmit}>
<input type="text" name="listItem" /><button>Add Item</button><button onClick={RemoveAllItems}>Clear</button>
<ol>
{
    ShoppingListApp.shoppingList.map((litem)=>{
        return <li>{litem}</li>;
    })
}
</ol>

</form>

    <p>
    
    </p>
</div>);
const appRoot=document.getElementById('app');

console.log(ShoppingListApp.theShoppingList());

ReactDOM.render(template,appRoot);
}

Render();