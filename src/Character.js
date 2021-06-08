import React from 'react';
import './Character.css';

export default function Character(props){
    let cls = "";
    if(props.status == 'Alive'){
        cls ="alv";
    }else if(props.status =='Dead'){
        cls ="dd";
    }else{
        cls ="unk";
    }
    return(
        <>
            <img id="foto" src={props.img} alt="img"></img> 
            <div id="txt">
                <div id="nm">{props.name}</div>
                <div> Status: <span className={cls}>{props.status}</span></div>
                <div>Specie: {props.specie}</div>
                <div>Origin: {props.origin}</div>
            </div> 
        </>
    );
}