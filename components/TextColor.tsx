import{ Text, TextProps} from'./Themed';

export function Red(props: TextProps) { 
    return  <Text {...props} style={[props.style, { color:'red'}]}/>;
}
export function Green(props: TextProps) { 
    return  <Text {...props} style={[props.style, { color:'green'}]}/>;
}
export function Blue(props: TextProps) { 
    return  <Text {...props} style={[props.style, { color:'blue'}]}/>;
}