import React from 'react'
import Card from './Card';
import Character from './Character';
import './App.css'

export default class Appers extends React.Component{
  state={
    loading: true,
    characters: [],
    searchName:'',
  }
  updateSeachName(event){
    this.setState({searchName:event.target.value})
  }
  async componentDidMount(){
    const resp = await fetch("https://rickandmortyapi.com/api/character");
    const data = await resp.json();

    // this.setState({loading:false,data:data});
    this.setState({loading:false,characters:data.results});
  }
  render(){
    return(
      <div>
        {this.state.loading ?
          <div> loading...</div> :
          <>
          <input onChange={this.updateSeachName.bind(this)} id='searchByNameInput' type='text' placeholder='Search by name'></input>
          {this.state.characters.filter((charac,i)=>{
            if(this.state.searchName ==''){
              return charac
            }else if(charac.name.toLowerCase().includes(this.state.searchName)){
              return charac;
            }
          }).map(character =>{
            return(
              <>
                <Card>
                  <Character
                  name={character.name} 
                  img ={character.image}
                  status={character.status}
                  specie={character.species}
                  origin ={character.origin.name}
                  />
                </Card>
              </>
            )
          })}
          </>
          }
      </div>
    );
  }

}