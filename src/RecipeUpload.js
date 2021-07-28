
import React, { useState, useEffect } from "react";
import Axios from 'axios'


function RecipeUpload() {

    const [ingredient0, setIngredient0] = useState('')
    const [ingredient1, setIngredient1] = useState('')
    const [ingredient2, setIngredient2] = useState('')
    const [ingredient3, setIngredient3] = useState('')
    const [ingredient4, setIngredient4] = useState('')
    const [ingredient5, setIngredient5] = useState('')
    const [ingredient6, setIngredient6] = useState('')
    const [ingredient7, setIngredient7] = useState('')
    const [ingredient8, setIngredient8] = useState('')

    let ingredients = {
        ingredients0: ingredient0,
        ingredients1: ingredient1,
        ingredients2: ingredient2,
        ingredients3: ingredient3,
        ingredients4: ingredient4,
        ingredients5: ingredient5,
        ingredients6: ingredient6,
        ingredients7: ingredient7,
        ingredients8: ingredient8
    };
    const submitAdd =  () => {
        
      //  console.log( JSON.stringify(ingredients));
         Axios.post('https://us-central1-diesel-ellipse-321017.cloudfunctions.net/function-1', ingredients ).then((response) => {
            console.log(response);
            let avg = (response.data.upper_bound / response.data.lower_bound);
            alert("Similarity Score is: " + avg.toFixed(2));
        })

            .catch((err) => {
                console.log(err)
            })

    }


    return (
        <body>


            {/*Ingredient0*/}
            <div >

                <b>  <label class="lab"> Ingredient0</label> </b> &nbsp;&nbsp;&nbsp;&nbsp;

                <input
                    id="ingredient0"
                    placeholder=""
                    class="form-control" onChange={(e) => {
                        setIngredient0(e.target.value)
                    }}
                />

            </div>

            {/*Ingredient1*/}
            <div >

                <b>  <label class="lab"> Ingredient1</label> </b> &nbsp;&nbsp;&nbsp;&nbsp;

                <input
                    id="ingredient1"
                    placeholder=""
                    class="form-control" onChange={(e) => {
                        setIngredient1(e.target.value)
                    }}
                />

            </div>

            <div >

                <b>  <label class="lab"> Ingredient2</label> </b> &nbsp;&nbsp;&nbsp;&nbsp;

                <input
                    id="ingredient2"
                    placeholder=""
                    class="form-control" onChange={(e) => {
                        setIngredient2(e.target.value)
                    }}
                />

            </div>

            <div >

                <b>  <label class="lab"> Ingredient3</label> </b> &nbsp;&nbsp;&nbsp;&nbsp;

                <input
                    id="ingredient3"
                    placeholder=""
                    class="form-control" onChange={(e) => {
                        setIngredient3(e.target.value)
                    }}
                />

            </div>

            <div >

                <b>  <label class="lab"> Ingredient4</label> </b> &nbsp;&nbsp;&nbsp;&nbsp;

                <input
                    id="ingredient4"
                    placeholder=""
                    class="form-control" onChange={(e) => {
                        setIngredient4(e.target.value)
                    }}
                />

            </div>

            <div >

                <b>  <label class="lab"> Ingredient5</label> </b> &nbsp;&nbsp;&nbsp;&nbsp;

                <input
                    id="ingredient5"
                    placeholder=""
                    class="form-control" onChange={(e) => {
                        setIngredient5(e.target.value)
                    }}
                />

            </div>

            <div >

                <b>  <label class="lab"> Ingredient6</label> </b> &nbsp;&nbsp;&nbsp;&nbsp;

                <input
                    id="ingredient6"
                    placeholder=""
                    class="form-control" onChange={(e) => {
                        setIngredient6(e.target.value)
                    }}
                />

            </div>
            <div >

                <b>  <label class="lab"> Ingredient7</label> </b> &nbsp;&nbsp;&nbsp;&nbsp;

                <input
                    id="ingredient7"
                    placeholder=""
                    class="form-control" onChange={(e) => {
                        setIngredient7(e.target.value)
                    }}
                />

            </div><div >

                <b>  <label class="lab"> Ingredient8</label> </b> &nbsp;&nbsp;&nbsp;&nbsp;

                <input
                    id="ingredient8"
                    placeholder=""
                    class="form-control" onChange={(e) => {
                        setIngredient8(e.target.value)
                    }}
                />

            </div>
            <button type="submit" onClick={submitAdd} >Upload Recipe</button>&nbsp;&nbsp;&nbsp;&nbsp;
        </body>

    );
}

export default RecipeUpload;
