import { View, Text, Button} from 'react-native';

// Navigation nos manda los screens
const HomeScreen = ({navigation}) => {
    return(
      <View>
        <Text style={{margin: 50, textAlign: 'center', fontWeight: 'bold', }}>Inicio de la Aplicación</Text>
        <Button 
        title='Ir  A Lista de Tareas'
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