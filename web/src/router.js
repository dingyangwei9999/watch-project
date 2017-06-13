import React from 'react'
import {Route} from 'react-router'

import AppComponent from './modules/app/AppComponent'
import LoginComponent from './modules/login/LoginComponent'
import FooterComponent from './modules/footer/FooterComponent'
import CategoryComponent from './modules/category/CategoryComponent'
import ListPageComponent from './modules/listpage/ListPageComponent'
import RegisterComponent from './modules/register/registerComponent'
import MemberCenterComponent from './modules/memberCenter/memberCenterComponent'
import DetailsComponent from './modules/details/detailsComponent'
import BuycarComponent from './modules/buycar/BuycarComponent'
import OrderpageComponent from './modules/orderpage/OrderpageComponent'

export default (
    <Route>
    	<Route path="/" component={AppComponent}/>
        <Route path="login" component={LoginComponent} />
        <Route path="register" component={RegisterComponent} />
        <Route path = "memberCenter" component={MemberCenterComponent}/>
        <Route path = "details" component={DetailsComponent}/>
        <Route path="buycar" component={BuycarComponent} />
        <Route path="orderpage" component={OrderpageComponent} />
        <Route path="listPage" component={ListPageComponent}/>
        <Route path="category" component={CategoryComponent}/>
        <Route path="footer" component={FooterComponent} />
    </Route>
)