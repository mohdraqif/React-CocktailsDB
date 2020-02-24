import React, {useState, useEffect} from 'react';
import SearchForm from '../components/SearchForm'
import CocktailList from '../components/CocktailList'

const Home = () => {
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('a')
  const [cocktails, setCocktails] = useState([])

// Fetches data from COCKTAILDB API
  useEffect(() => {
    setLoading(true)
    async function getDrinks() {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        // .then(response => response.json())
        // .then(data => console.log(data))
        const data = await response.json()              
        
        if(data.drinks) {
          const newCocktails = data.drinks.map((item => {
            const {idDrink, strDrink, strDrinkThumb, strAlcoholic,strGlass} = item
            return {
              id:idDrink, 
              name:strDrink, 
              image: strDrinkThumb,
              info:strAlcoholic,
              glass: strGlass
            }
          }))
          setCocktails(newCocktails)
        } 
        else{
          setCocktails([])
        }
      } catch (e) {
        console.log(e)
      }
      setLoading(false)
    }
    getDrinks()
  }, [searchTerm]);

  return (
    <main>
      <SearchForm setSearchTerm={setSearchTerm} />
      <CocktailList loading={loading} cocktails={cocktails} />
    </main>
  );
}

export default Home;
