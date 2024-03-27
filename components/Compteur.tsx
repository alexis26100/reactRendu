import React, { useReducer, useRef, useState, useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import styles from './css/style';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function useInterval(callback: any, delay: any) {
  const savedCallback = useRef<() => void>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    if (delay !== null) {
      let id = setInterval(() => {
        if (savedCallback.current) {
          savedCallback.current();
        }
      }, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export function ExoUseInterval() {
  const [count, setCount] = useState(0);
  useInterval(() => {
    setCount(count + 1);
  }, 1000);
  return <Text style={{ fontSize: 120 }}>{count}</Text>;

}

 export  function AddToNumber() {
  const [getNumber, setAddNumber] = useState(Number);
  const UpdateNbr = useRef(0);
  return (
    <View>
      <Button title="Add +1 At compter" onPress={() => {
	     UpdateNbr.current++
        }}
      />
      <Button title="Add - 1 At compter" onPress={() => {
	      UpdateNbr.current--
        }} ></Button>

    <Button title="Reset compter" onPress={() => {
	     UpdateNbr.current = 0
        }} ></Button>

      <Button title="Update" onPress={() => {
       setAddNumber(UpdateNbr.current)
             }}
             
        />
        <Text style={{ fontSize: 24 }}>
            { getNumber }
          </Text>
    </View>
    
  )
  
}


// export  function AddToNumberUseReducer() {
//     const inputRef = useRef();
//     const [items, dispatch] = useReducer((state : any, action : any) => {
//       switch (action.type) {
//         case 'add': return state++;
//         case 'remove': return state--;
//         case 'reset' : return state = 0 ;
//         default:
//           return state;
//       }
//     }, []);
//     return (
//       <View>
//         <Button title="Add +1 At compter" onPress={() => dispatch ({ type : "add"})}
//         />
//         <Button title="Add - 1 At compter" onPress={() => dispatch ({ type : "remove"})} ></Button>
  
//       <Button title="Reset compter" onPress={() => dispatch ({ type : "reset"})} ></Button>

//           <Text style={{ fontSize: 24 }}>
//               { items }
//             </Text>
//       </View>
      
//     ) 
//   }

