import * as React from 'react';
import { styled, useTheme, alpha } from '@mui/material/styles';
import { requirePropFactory } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import $ from "jquery"
import './formulaire.css';
import QuestionChek from './QuestionChek'

// que="Choisissez ce que vous appréciez" rep={['male','female']} ima={["http://findicons.com/files/icons/1688/web_blog/48/user_male_white_red_brown.png","http://findicons.com/files/icons/1688/web_blog/48/user_female_white_pink_black.png"]} type="gender"

function Formulaire() {
    var resultat = [];
    const test = () =>{
        var t = $(".chek");
        console.log(t);
        for(var a of t){
            console.log(a.id);
            resultat.push(a.id);
        }
        console.log(resultat);
    }
    return <div>
        <form>
          <QuestionChek que="Que préférez vous ?" resp={['cathedrale','lautrec']} type="lieux" ima={[require("./images/places/cath.jpg"), require("./images/places/laut.jpg")]}/>
        </form>
        <button onClick={() => test()}>Valider</button>
    </div>
    ;
    
  }

  export default Formulaire;