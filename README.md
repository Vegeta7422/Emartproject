# Emartproject

#FRONTEND#
---------------------------------------------------------------------------------------------------------------------------------------
React :- we write fetch method. & Inside fetch method, we provide URL & that URL will get mapped in controller. [frontend connect to middleware.

fetch method (URL) → controller → Service layer → Repository frontend connects to middleware database

Middleware connects to backend.

Here we write Query which make changes in database

--------------------------------------------------------------------------------------------------------------------------------------


We use mysql as BACKEND.

1) 1st we create ER diagram & define the relationship bet" the tables (Entities)

cart &tems & products have many to one.

eart & cant items.. Done to cart & orders one to one many

cart & customers one to one Payments & orders → one to one.

+ for middleware →→ Java springboot

and src (Final - Project > Emart project > src >main > java > com > emart > entities) path we define poĝo classes of each table (entities).

like cart, Cart Items, Category, Configuration, Customer,

Orders Payment, Product, Product Details.



In each Pojo classes we declare, private variables (name same as column name of tables).

Eg Cart Items Cont_Item Id quantity, prime (customer price,

P-Id, cart_Id

•We define constructor for that java class (cart Iten) then we define write setters & getters for each private variables we write tostring method to get values print the values of variably

which are in object form by default. To convert its in string we we to string method

we also we some annotations like @antity@override @2d And we also define relationships in pojo classes...

cart@one Toone

Category → @ One To many Payment ~@ One To One

+ configuration OneToMany orders@One to One

Product Details One to One.


Inside.

Services; Basically services contains interface & its implementation. for each poJo classes

eg. Cart Them Manager interface.

which contains CRUD operation.

Here we declare add Contthem, delete & update methods. And the implementation of this methods are they fo

Cart Item Manager Empl-> Implementation

Inside Repository ;

we extend the JpaRepository eg public interface Cart Item Repository extends JpaRepository •And we write query which makes changes in database

[Spa Repository provides us methods like.

Inside Con save, findAll delete Byed (id) find By Id (id)] By creating the reference of repository in Cart them Manages Pigt

(Implementation class) we call the methods of Ipa repository.

Inside Controller

Here we write @ Cross Origin ("http://localhost: 3000") to interact with frontend

• In controller we write all the mapping methods.

like In Cart Prem Controller,

remove

"+ @ Get Mapping (value =" api/cartitems By Id /ictid}" } } @Delete mapping (value = "api/contitems/& ctid}") @ Put mapping / value= value="-"

annotating

update lot Cartitem

338

Post Mapping (value=" api/cant items") public void add cartitem

methods
--------------------------------------------------------------------------------------------------------------------------------------
