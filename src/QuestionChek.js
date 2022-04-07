import * as React from 'react';
import { styled, useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import $ from "jquery"
import './questionchek.css';


function QuestionChek(rep) {  // On donne en paramètre la question, les réponses possibles et leurs images
    const imageClick = (i) => {
        var ident=i.r;
        var cl = $("#"+ident).attr('class');
        if(cl.includes("unchek")){
            $("#"+ident).removeClass("unchek").addClass("chek");
        }else{
            $("#"+ident).removeClass("chek").addClass("unchek");
        }
      }
    return <div>
        <Card className='centerDiv'>
            <h1>
                {rep.que}
            </h1>
                    {rep.resp.map((r,index) =>(
                        <img src={rep.ima[index]} alt={r} id={r} className='unchek' onClick={() => imageClick({r})}></img>
                    ))}
                    


                
        </Card>
    </div>
    ;
    
  }
  export default QuestionChek;
/*
        <Card className='centerDiv'>
            <h1>
                {que}
            </h1>
            <div>
                <fieldset>
                    {rep.map((text, index) => (
                        <input type="radio" name={type} id={text}></input>
                    ))}
                    <input type="radio" name="gender" id="male"></input>
                    <label for="male">
                        <img src="http://findicons.com/files/icons/1688/web_blog/48/user_male_white_red_brown.png" alt="male"></img>
                    </label>

                    <input type="radio" name="gender" id="female"></input>
                    <label for="female">
                        <img src="http://findicons.com/files/icons/1688/web_blog/48/user_female_white_pink_black.png" alt="male"></img>
                    </label>
                </fieldset>

            </div>
        </Card>
*/
