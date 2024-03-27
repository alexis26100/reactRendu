import React from 'react' 
import { Button, View, Text} from'react-native'

export function ClickOnMe() {
    return(
        <Button title="Bouton de test" onPress={() =>{console.log('Hello');}}/>
        )
    }

 export function ClickIfYouCan({ title, buttonTitle}  : {title : string, buttonTitle: any}) {
    return(
        <View><Text>{title}</Text>{buttonTitle? <Button title={buttonTitle}/>: null}</View>
    )   
 }

 export function Card({ loading, error, title }:{loading:boolean, error:boolean,title:string})  {
    let content
    if (error) {
      content = <Text style={{ fontSize: 24, color: 'red' }}>Error</Text>
    } else if (loading) {
      content = <Text style={{ fontSize: 24, color: 'gray' }}>Loading...</Text>
    } else {
      content = (
        <View>
          <Text style={{ fontSize: 60 }}>{title}</Text>
        </View>
      )
    }
      return <View style={{ padding: 24 }}>{content}</View>
  }