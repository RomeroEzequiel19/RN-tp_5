import { View, Text, Button} from 'react-native';

// Navigation nos manda los screens
const HomeScreen = ({navigation}) => {
    return(
      <View>
        <Text>Inicio de la Aplicación</Text>
        <Button 
        title='Ir  A Detalles'
        onPress={() => navigation.navigate("Lista")} 
        />
        <Button 
        title='Ir  A Contador'
        onPress={() => navigation.navigate("Contador")} 
        />
      </View>
    )
}

export default HomeScreen