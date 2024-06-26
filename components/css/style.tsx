import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Style de base pour le corps de la page
  body: {
    flex: 1,
  },
  
  // En-tête simple
  header: {
    color: '#fff',
    padding: 16,
  },

  // Conteneur principal
  container: {
    flex: 1,
    maxWidth: 1200,
    marginHorizontal: 'auto',
    padding: 16,
  },

  // Bouton simple
  button: {
    color: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },

  // Bouton de survol
  buttonHover: {
  },

  // Input simple
  input: {
    width: '100%',
    padding: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },

  // Carte simple
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderRadius: 4,
    padding: 16,
    marginBottom: 16,
  },

  // Texte centré
  textCenter: {
    textAlign: 'center',
  },

  // Liens simples
  link: {
    color: '#007bff',
    textDecorationLine: 'none',
  },

  // Liens simples : survol
  linkHover: {
    textDecorationLine: 'underline',
  },
});

export default styles;