'use strict';

var ShoppingListApp = {
    title: 'My Shopping List',
    shoppingList: [],
    listTitle: 'Things to buy',
    listEmpty: 'This list is empty',
    theShoppingList: function theShoppingList() {
        return this.shoppingList.map(function (item) {
            return item;
        });
    }
};

var listTitle = function listTitle() {
    return ShoppingListApp.shoppingList.length > 0 ? ShoppingListApp.listTitle : ShoppingListApp.listEmpty;
};

var ShoppingList = function ShoppingList() {
    var ShopList = "";
    for (var i = 0; i <= ShoppingListApp.shoppingList.length; i++) {
        if (i == 0) {
            ShopList = '<ol>';
        }
        if (i != ShoppingListApp.shoppingList.length) {
            ShopList = ShopList + '<li>' + ShoppingListApp.shoppingList[i] + '</li>';
        }
        if (i == ShoppingListApp.shoppingList.length) {
            ShopList = ShopList + '</ol>';
        }
    }
    return ShopList;
};

var OnFormSubmit = function OnFormSubmit(e) {
    e.preventDefault();
    if (e.target.elements.listItem.value) {
        ShoppingListApp.shoppingList.push(e.target.elements.listItem.value);
        Render();
        e.target.elements.listItem.value = '';
    }
};

var RemoveAllItems = function RemoveAllItems() {
    ShoppingListApp.shoppingList = [];
    Render();
};

var Render = function Render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            ShoppingListApp.title
        ),
        React.createElement('br', null),
        React.createElement('br', null),
        React.createElement(
            'h3',
            null,
            listTitle()
        ),
        React.createElement('br', null),
        React.createElement(
            'form',
            { onSubmit: OnFormSubmit },
            React.createElement('input', { type: 'text', name: 'listItem' }),
            React.createElement(
                'button',
                null,
                'Add Item'
            ),
            React.createElement(
                'button',
                { onClick: RemoveAllItems },
                'Clear'
            ),
            React.createElement(
                'ol',
                null,
                ShoppingListApp.shoppingList.map(function (litem) {
                    return React.createElement(
                        'li',
                        null,
                        litem
                    );
                })
            )
        ),
        React.createElement('p', null)
    );
    var appRoot = document.getElementById('app');

    console.log(ShoppingListApp.theShoppingList());

    ReactDOM.render(template, appRoot);
};

Render();
