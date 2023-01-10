import React from "react";
import { Link } from 'react-router-dom';
import './App.scss'

const WishListPage = (props) => {
    const wishListArr = JSON.parse(sessionStorage.getItem("wishListArr").toString());
        return(
            <div > 
                <header className="App-header">
                    <h3>MYTHERESA</h3>
                    <Link to="/">
                        <button>Home</button>
                    </Link>
                </header>
                <table>
                {wishListArr.map(function(element,index,arr){
                        return(
                            <tbody>
                                 <tr>
                                    <td>
                                        <img style={{height:"400px",width:"600px"}} srcSet={require("./assets/"+element.imgStr)}/>
                                    </td>
                                    <td style={{verticalAlign:"top"}}>
                                        <div style={{border: "1px solid grey",padding:"10px",height: "375px"}}>
                                            <div>
                                                <div className="descCls">Decription</div>
                                                {element.imgDet.map(function(element,index,arr){
                                                return(
                                                    <div className="textCls">{element}</div>
                                                )
                                                })}
                                            </div>
                                        </div>
                                    
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <div style={{border: "1px solid grey",padding:"10px"}}>
                                            <div className="descCls">Additional Info:</div>
                                            {element.imgAddData.map(function(element,index,arr){
                                                    return(
                                                        <div className="textCls">{element}</div>
                                                    )
                                                    })};
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
                   
            </div>
        );
}

export default WishListPage;